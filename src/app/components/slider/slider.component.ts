import {Component, Input} from '@angular/core';
import {SwiperOptions} from "swiper";
import {BandMember} from "../../models/models";
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() bandMembers?: BandMember[];

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
      modifier: 1.5,
      slideShadows : true,
    },
    slidesPerView: 1.2,
    spaceBetween: 30,
  };


}