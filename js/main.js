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

const blurHeader = () => {
  const header = document.querySelector('.page-header');
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

const contactForm = document.querySelector('.contact__form');
const contactMessage = document.querySelector('.contact__message');

const sendEmail = (evt) => {
  evt.preventDefault();
  emailjs.sendForm('service_f6kmqef', 'template_itdn71g', '#contact-form', 'gscMX-75JGSJT5afZ')
    .then(() => {
      contactMessage.textContent = 'Message sent successfully';
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
      contactForm.reset();
    }, () => {
      contactMessage.textContent = 'Message not sent (service error)';
    })
}

contactForm.addEventListener('submit', sendEmail);

const scrollUp = () => {
  const scrollUp = document.querySelector('.scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('scroll-show') : scrollUp.classList.remove('scroll-show');
}

window.addEventListener('scroll', scrollUp);