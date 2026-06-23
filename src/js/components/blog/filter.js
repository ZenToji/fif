export const useCategoryFilter = () => {
  const tabs = document.querySelectorAll('.categories__link');
  const slides = document.querySelectorAll('.posts__slide');
  const btn = document.querySelector('.insight__slider-btns');

  const checkBtn = () => {
    const visibleCount = [...slides].filter((s) => s.style.display !== 'none').length;
    if (btn) {
      btn.style.display = visibleCount <= 2 ? 'none' : 'flex';
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('categories__link--active'));
      tab.classList.add('categories__link--active');

      const category = tab.dataset.category;

      slides.forEach((slide) => {
        if (category === 'all' || slide.dataset.category === category) {
          slide.style.display = '';
        } else {
          slide.style.display = 'none';
        }
      });

      checkBtn();
    });
  });
};
