window.$ = window.jQuery = require('jquery');

//Mobile menu
$('.menu-button').on('click', function() {
    $('.navigation-wrapper').addClass('active');
})
$('.close-menu').on('click', function() {
    $('.navigation-wrapper').removeClass('active');
});

// Swiper
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([ Autoplay, Navigation, Pagination ]);

$(document).ready(function (){
    // About slider
    const swiper = new Swiper('.swiper-about', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 30
              },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            
            1224: {
              slidesPerView: 4,
              spaceBetween: 30
            },
        },
    });

    //Clients slider
    const clients_swiper = new Swiper('.clients__swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });
})

//Sticky
$(window).scroll(function(){
    const headerHeight = $('.header').outerHeight();
    const bannerHeight = $('.main-banner').outerHeight();
    if($(window).scrollTop() >= (bannerHeight - headerHeight)) {
        $('header').addClass('sticky');
    }
    else {
        $('header').removeClass('sticky');
    }
})

//Anchor links
$('a').on('click', function (e) {
    e.preventDefault();
    const hh = $('.header').outerHeight();
    if(this.hash !== '') {
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - hh
        }, 300, function () {
            window.location.hash = hash - hh;
        })
    }
})


// Tabs
$('.tabs__button').on('click', function () {
    $(".tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
    $(".tabs__item").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");
$(".tabs__item").eq(0).fadeIn();