let myImageSlider = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },

    simulateTouch: true,
    autoHeight: true,
    slidesPerView: 1,
    watchOverflow: true,
    loop: true,
    speed: 800,
});

myImageSlider.controller.control = myImageSlider;

let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = '0' + (myImageSlider.slides.length - 2);

myImageSlider.on('slideChange', function () {
    let currentSlide = ++myImageSlider.realIndex;
    mySliderCurrentSlide.innerHTML = '0' + currentSlide;
});

let myVideoSlider = new Swiper('.video-slider', {
    spaceBetween: 42,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.video-pagination',

        clickable: true,
    },
    simulateTouch: true,
    slidesPerView: 3,
    loop: true,
    speed: 800,
});

myVideoSlider.controller.control = myVideoSlider;