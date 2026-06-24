import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  const prevBtn = document.querySelector('.insight__slider-btns-prev');
  const nextBtn = document.querySelector('.insight__slider-btns-next');

  const swiper = new Swiper('.insight__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    navigation: {
      prevEl: '.insight__slider-btns-prev',
      nextEl: '.insight__slider-btns-next',
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
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
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};
