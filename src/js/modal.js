export function closeAllModals() {
  const allModals = document.querySelectorAll('.modal');
  const allOverlays = document.querySelectorAll('.modal-overlay');

  allModals.forEach(modal => modal.classList.remove('modal--active'));
  allOverlays.forEach(overlay => overlay.classList.remove('active'));
}

export function openModal(modal, overlay) {
  closeAllModals();
  if (modal && overlay) {
    modal.classList.add('modal--active');
    overlay.classList.add('active');
  }
}

export function closeModal(modal, overlay) {
  if (modal && overlay) {
    modal.classList.remove('modal--active');
    overlay.classList.remove('active');
  }
}

export function setupModal(modalId, openButtonIds, closeButtonId, overlayId) {
  const modal = document.getElementById(modalId);
  const closeButton = document.getElementById(closeButtonId);
  const overlay = document.getElementById(overlayId);

  openButtonIds.forEach(openButtonId => {
    const openButton = document.getElementById(openButtonId);
    if (openButton) {
      openButton.addEventListener('click', () => openModal(modal, overlay));
    }
  });

  if (modal && closeButton && overlay) {
    closeButton.addEventListener('click', () => closeModal(modal, overlay));
    overlay.addEventListener('click', () => closeModal(modal, overlay));
  } else {
    console.error(`Элементов для модального окна нет: ${modalId}`);
  }
}
