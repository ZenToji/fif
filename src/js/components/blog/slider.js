import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useBlogSliders = () => {
  const prevBtn = document.querySelector('.posts .insight__slider-btns-prev');
  const nextBtn = document.querySelector('.posts .insight__slider-btns-next');

  const swiper = new Swiper('.posts__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: false,
    navigation: {
      prevEl: '.posts .insight__slider-btns-prev',
      nextEl: '.posts .insight__slider-btns-next',
    },
  });

  if (prevBtn && nextBtn) {
    const updateDisabled = () => {
      prevBtn.classList.toggle('is-disabled', swiper.isBeginning);
      nextBtn.classList.toggle('is-disabled', swiper.isEnd);
    };
    swiper.on('slideChange', updateDisabled);
    updateDisabled();
  }

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
