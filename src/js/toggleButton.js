export function setupToggleButton(swiperSelector) {
  const showMoreButton = document.querySelector(`${swiperSelector} .button-toggle`);
  const brandsContainer = document.querySelector(`${swiperSelector} .swiper-wrapper`);

  let areBrandsVisible = false;

  function toggleBrandsVisibility(visible) {
    if (visible) {
      brandsContainer.classList.remove('swiper-wrapper--collapsed');
    } else {
      brandsContainer.classList.add('swiper-wrapper--collapsed');
    }
  }

  if (showMoreButton) {
    showMoreButton.addEventListener('click', function () {
      areBrandsVisible = !areBrandsVisible;
      toggleBrandsVisibility(areBrandsVisible);
      const buttonText = areBrandsVisible ? 'Скрыть' : 'Показать все';
      showMoreButton.querySelector('.button-toggle__text').innerText = buttonText;
      showMoreButton.classList.toggle('expanded', areBrandsVisible);
    });
  }
}
