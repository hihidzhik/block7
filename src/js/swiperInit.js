import '../scss/style.scss';
import '../scss/stylesheet.scss';

export const initSwiper = () => {
  if (window.innerWidth <= 767) {
    new Swiper('.swiper', {
      slidesPerView: "auto",
      slidesOffsetAfter: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
};

