import {Component, HostListener, Input} from '@angular/core';
import SwiperCore , {SwiperOptions, EffectCoverflow, Navigation } from "swiper";
import {BandMember} from "../../models/models";
import {style, animate, transition, trigger} from '@angular/animations';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

@Component({
  selector: 'app-slider',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() bandMembers?: BandMember[];
  public innerWidth: any;
  public sliderIndex: number = 0;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  config: SwiperOptions = {
    pagination: { bulletClass: 'swiper-bullet' },
    loop: true,
    loopedSlides: 5,
    centeredSlides: true,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 10,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows : false,
    },
    slidesPerView: this.getSlidesForWidth(innerWidth),
    spaceBetween: 30,
  };
  getSlidesForWidth(width:number){
    if(width > 1000){
      return 2.3
    } else if (width > 800) {
      return 2.3
    } else if (width > 600) {
      return 2
    } else {
      return 1.3
    }
  }
  onSlideChange(e: any) {
    this.sliderIndex = e.activeIndex - 5;
    if(this.sliderIndex === 5){
      this.sliderIndex = 0;
    }
  }

  getImage(indexParam:number): string{
    if(this.sliderIndex === indexParam){
      return 'main'
    }
    if(this.sliderIndex === 3 && indexParam === 0){
      return 'left';
    }
    if(this.sliderIndex === 4){
      if(indexParam === 0 || indexParam === 1) {
        return 'left'
      }
    }
    if(indexParam > this.sliderIndex && indexParam <= this.sliderIndex + 2){
      return 'left'
    } else {
      return 'right'
    }
  }
}
