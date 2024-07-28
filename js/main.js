const navMenu = document.querySelector('.main-nav__menu');
const navToggle = document.querySelector('.main-nav__toggle');
const navClose = document.querySelector('.main-nav__close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('open-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('open-menu')
  })
}

const navLink = document.querySelectorAll('.main-nav__link');
const linkAction = () => {
  navMenu.classList.remove('open-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));