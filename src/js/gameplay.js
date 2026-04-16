import Swiper from 'swiper';
import 'swiper/css/bundle';

let gameplaySwiper;

gameplaySwiper = new Swiper('.gameplay-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 20,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 6,
      centeredSlides: false,
      allowTouchMove: false,
      grabCursor: false,
      spaceBetween: 0,
    },
  },
  on: {
    init(swiper) {
      document
        .querySelector('.gameplay-swiper-container')
        .classList.add('show');
    },
  },
});
