import {Component, Input, OnInit} from '@angular/core';
import {BandMember} from "../../models/models";

@Component({
  selector: 'app-band-member',
  templateUrl: './band-member.component.html',
  styleUrls: ['./band-member.component.scss']
})
export class BandMemberComponent implements OnInit {
  @Input() bandMember: BandMember | undefined;
  isHoveredOver: boolean = false;
  currentImage: string = "main";
  constructor() { }

  ngOnInit(): void {
  }

  hoveredOver(){
   this.isHoveredOver = true;
  }
}
