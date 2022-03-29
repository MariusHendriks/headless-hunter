import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor() { }

  public innerWidth: any;
  soundcloudHeight: number = 0;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setSoundcloudWidth(this.innerWidth);
  }
  // @HostListener('window:resize', ['$event'])
  // onResize(event:any) {
  //   this.innerWidth = window.innerWidth;
  //   this.setSoundcloudWidth(window.innerWidth);
  // }

  setSoundcloudWidth(width:number) {
    this.soundcloudHeight = 500;
  //   if(width > 1200){
  //     this.soundcloudHeight = 500;
  //   } else if (width > 1024){
  //     this.soundcloudHeight = 500;
  //   } else if (width > 768){
  //     this.soundcloudHeight = 500;
  //   } else {
  //     this.soundcloudHeight = 500;
  //   }
  }
}
