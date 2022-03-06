import {Component, HostListener, Input} from '@angular/core';
import {SwiperOptions} from "swiper";
import {BandMember} from "../../models/models";
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() bandMembers?: BandMember[];
  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    loop: true,
    loopedSlides: 5,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    effect: 'coverflow',
    slideNextClass: '.swiper-button-next',
    slidePrevClass: '.swiper-button-prev',
    coverflowEffect: {
      rotate: 10,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows : true,
    },
    slidesPerView: innerWidth > 600 ? 2 : 1.2,
    spaceBetween: 30,
  };


}
