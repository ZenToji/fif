import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const setupSlider = (selector, prevSelector, nextSelector) => {
  const prevBtn = document.querySelector(prevSelector);
  const nextBtn = document.querySelector(nextSelector);

  const swiper = new Swiper(selector, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    navigation: {
      prevEl: prevSelector,
      nextEl: nextSelector,
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

export const useAboutSliders = () => {
  setupSlider('.about-gallery__slider', '.about-gallery__slider-btns-prev', '.about-gallery__slider-btns-next');
  setupSlider('.about-team__slider', '.about-team__slider-btns-prev', '.about-team__slider-btns-next');
};
