import Swiper, { Navigation, Thumbs, EffectFade, Pagination, Controller, Autoplay } from 'swiper';
Swiper.use([Thumbs, EffectFade, Navigation, Pagination, Controller, Autoplay]);

const clientSlider = document.querySelector('.client-slider');

if(clientSlider) {
  let isAutoplayEnabled = false;
  clientSlider.classList.contains('autoplay') ?
  isAutoplayEnabled = true : isAutoplayEnabled = false;

  let btnNext = clientSlider.parentNode.querySelector('.slider-section-button-next');
  let btnPrev = clientSlider.parentNode.querySelector('.slider-section-button-prev');

  let speed;

  isAutoplayEnabled ? speed = 3000 : speed = 300;

  new Swiper(clientSlider, {
    slidesPerView: 'auto',
    spaceBetween: 60,
    centerInsufficientSlides: true,
    speed,

    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev,
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    autoplay: isAutoplayEnabled,
  });
};

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
    spaceBetween: 30,
    slidesPerView: 1,

    pagination: {
      el: ".banner-slider-pagination",
      clickable: true
    },

    navigation: {
      nextEl: ".banner-slider-button-next",
      prevEl: ".banner-slider-button-prev",
    },
  })
}

const productSlider = document.querySelector('.product-slider');

if(productSlider) {
  let sliderThumbs = new Swiper(".product-slider-thumbs", {
     slidesPerView: 'auto',
     spaceBetween: 10,
     watchOverflow: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     direction: 'vertical',

     breakpoints: {
      534: {
        slidesPerView: 2,
      },

      900: {
        slidesPerView: 3,
      },

      1140: {
        slidesPerView: 4,
      }
     }
  });

  let slider = new Swiper(".product-slider", {
     watchOverflow: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     grabCursor: true,

     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },

     effect: 'fade',
     fadeEffect: {
        crossFade: true
     },

     thumbs: {
        swiper: sliderThumbs
     },
  });
}
