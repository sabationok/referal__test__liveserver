function nameOpenClose() {
  const menuBoxEl = document.querySelector('.menu__box');
  const menuBtnEl = document.querySelector('.button.--for_menu');
  const menuListEl = document.querySelector('.nav__list');

  menuBtnEl.addEventListener('click', el => {
    menuListEl.classList.toggle('--is-open')
  })
}
nameOpenClose();
