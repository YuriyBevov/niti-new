const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const closer = nav.querySelector('.nav-closer');

if(burger && nav && closer) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('mobile-opened');
  });

  closer.addEventListener('click', () => {
    nav.classList.toggle('mobile-opened');
  });
}
