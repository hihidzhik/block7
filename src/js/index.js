import '../scss/style.scss';
import '../scss/stylesheet.scss';
import { setupToggleButton } from './toggleButton';
import { setupModal } from './modal';

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 767) {
    setupToggleButton('.swiper1');
    setupToggleButton('.swiper2');
  }

  const menuButton = document.querySelector('.menu-button');
  const closeButton = document.querySelector('.close-button');
  const sidebar = document.querySelector('.sidebar');

  if (menuButton && closeButton && sidebar) {
    menuButton.addEventListener('click', () => {
      sidebar.classList.remove('sidebar-hidden');
    });

    closeButton.addEventListener('click', () => {
      sidebar.classList.add('sidebar-hidden');
    });
  }

  if (window.innerWidth <= 767) {
    import('./swiperInit').then(({ initSwiper }) => {
      initSwiper();
    });
  }

  setupModal('modal-feedback', ['modal-feedback-open', 'modal-feedback-open-header'], 'modal-feedback-close', 'modal-feedback-overlay');
  setupModal('modal-call', ['modal-call-open', 'modal-call-open-header'], 'modal-call-close', 'modal-call-overlay');
});
