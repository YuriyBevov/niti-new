import Swiper, { Navigation, Thumbs, EffectFade, Pagination, Controller } from 'swiper';

Swiper.use([Thumbs, EffectFade, Navigation, Pagination, Controller]);

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

const productSlider = document.querySelector('.product-slider');

/*if(productSlider) {
  var swiper = new Swiper(".product-slider-thumbs", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    slideToClickedSlide: true,
  });

  var swiper2 = new Swiper(".product-slider", {
    spaceBetween: 10,
    watchOverflow: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}*/

if(productSlider) {
  let sliderThumbs = new Swiper(".product-slider-thumbs", {
     slidesPerView: 'auto',
     watchOverflow: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     //direction: 'horizontal',

     breakpoints: {
        /*961: {
          spaceBetween: 5,
          slidesPerView: 3,
          direction: "vertical",
        },*/

        769: {
           slidesPerView: 5,
        },

        634: {
           slidesPerView: 4,
        },

        /*400: {
          direction: "vertical",
        }*/
     },
  });

  let slider = new Swiper(".product-slider", {
     watchOverflow: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     //preventInteractionOnTransition: true,
     //allowTouchMove: false,
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

/*
const thumbSlider = document.querySelector('.thumb-slider');
if(thumbSlider) {
	const thumbs = new Swiper(".thumb-slider-thumbs", {
		spaceBetween: 5,
		centeredSlides: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
    grabCursor: true,
    watchOverflow: true,
	});

  const main = new Swiper(".thumb-slider", {

		spaceBetween: 10,
		touchRatio: 0.2,
    grabCursor: true,

    navigation: {
      nextEl: '.thumb-slider-button-next',
      prevEl: '.thumb-slider-button-prev',
    },
	});

	main.controller.control = thumbs;
	thumbs.controller.control = main;
}
*/
