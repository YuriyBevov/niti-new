import Swiper, { Navigation } from 'swiper';

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
