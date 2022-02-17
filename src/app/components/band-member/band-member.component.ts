import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {BandMember} from "../../models/models";

@Component({
  selector: 'app-band-member',
  templateUrl: './band-member.component.html',
  styleUrls: ['./band-member.component.scss']
})
export class BandMemberComponent implements OnInit {
  isHoveringOver: boolean = false;
  isHoveredOver: boolean = false;
  currentImage: string = "main";
  @Input() bandMember?: BandMember;
  @ViewChild('memberDiv') memberDiv:any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    if(this.isHoveringOver){
      this.currentImage = "main";
    } else if(this.isHoveredOver){
      const divClientRect = this.memberDiv.nativeElement.getBoundingClientRect();
      this.currentImage = this.getImageDependingOnMousePosition(e.x, e.y, divClientRect);
    }
  }

  constructor() {

  }

  ngOnInit(): void {

  }

  getImageDependingOnMousePosition(xPos: number, yPos:number, divProps:DOMRect){
    const divWidth = divProps.width;
    const divHeight = divProps.height;

    //Check if it is the top image
    if(xPos > divProps.x && xPos < divProps.x + divWidth && yPos < divProps.y){
      return 'up';
    }

    //Check if it is the bottom image
    if(xPos > divProps.x && xPos < divProps.x + divWidth && yPos > divProps.y + divHeight){
      return 'bottom';
    }

    //Check if it is left faced image
    if(xPos < divProps.x){
      if(yPos > divProps.y && yPos < divProps.y + divHeight){
        return 'left';
      } else if(yPos < divProps.y){
        return 'topleft';
      } else if(yPos > divProps.y + divHeight){
        return 'bottomleft'
      }
    }

    //Check if it is right faced image
    if(xPos > divProps.x + divWidth){
      if(yPos > divProps.y && yPos < divProps.y + divHeight){
        return 'right';
      } else if(yPos < divProps.y){
        return 'upright';
      } else if(yPos > divProps.y + divHeight){
        return 'bottomright'
      }
    }

    return 'main';
  }


  hoveredOver(){
   this.isHoveredOver = true;
   this.isHoveringOver = true;
  }

  hoverOut(){
    this.isHoveringOver = false;
  }
}
