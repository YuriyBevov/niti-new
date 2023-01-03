const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

if(true) {
  const closer = nav.querySelector('.nav-closer');

  burger.addEventListener('click', () => {
    nav.classList.toggle('mobile-opened');
  });

  closer.addEventListener('click', () => {
    nav.classList.toggle('mobile-opened');
  });
}
