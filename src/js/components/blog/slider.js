import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useBlogSliders = () => {
  new Swiper('.posts__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: false,
  });

  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
};
