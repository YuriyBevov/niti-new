import Swiper, { Navigation, Pagination } from 'swiper';

const mainSliders = document.querySelectorAll('.main-slider');

if(mainSliders) {
    mainSliders.forEach(slider => {
        const buttonNext = slider.parentNode.querySelector('.main-slider-button-next');
        const buttonPrev = slider.parentNode.querySelector('.main-slider-button-prev');

        new Swiper(slider, {
            modules: [Navigation],

            slidesPerView: 'auto',
            spaceBetween: 15,

            navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev,
            },
        });
   });
}

const bannerSlider = document.querySelector('.banner-slider');

if(bannerSlider) {
  new Swiper(bannerSlider, {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,

    pagination: {
      el: ".banner-slider-pagination",
      clickable: true
      //dynamicBullets: true,
    },

    navigation: {
      nextEl: ".banner-slider-button-next",
      prevEl: ".banner-slider-button-prev",
    },
  })
}
