import { gsap } from "gsap";

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

if(burger && nav) {
  const timeline = gsap.timeline({});
  const closer = nav.querySelector('.nav-closer');

  burger.addEventListener('click', () => {
    nav.classList.toggle('mobile-opened');

    timeline
    .fromTo('.nav__container', {x: '100%', opacity: 0},{
      x: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'ease-in'
    })
    .fromTo('.nav__list-item',{
      opacity: 0,
      y:'100%'
    }, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'linear',
      stagger: 0.1,
    })
    .fromTo('.header .social',{
      opacity: 0,
      y: '50px'
    }, {
      opacity: 1,
      y: '0',
      duration: 1.2,
      ease: 'back',
    }, "-=.8")
    .fromTo('.nav__logo',{
      opacity: 0,
      y: '50px'
    }, {
      opacity: .4,
      y: '0',
      duration: 0.6,
      ease: 'linear',
    }, "-=.6")
    .fromTo('.nav__city',{
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.3,
      ease: 'linear',
    }, "-=.4")
  });

  closer.addEventListener('click', () => {
    closeNav();
  });

  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      closeNav();
    }
  })

  nav.addEventListener('click', (evt) => {
    if(evt.target === nav) {
      closeNav();
    }
  })

  const closeNav = () => {
    nav.classList.remove('mobile-opened');
    timeline.progress(1);
  }
}

