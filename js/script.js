$(document).ready(function() {
    $('.demo').slick({
        // slidesToShow: 3,
        // slidesToScroll: 1,
        dots: true,
        dotsClass: 'slick-dots',
        prevArrow: '<button class="btn-left"></button>',
        nextArrow: '<button class="btn-right"></button>',
        // touchMove: false
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function() {
    $('.slider-twitter').slick({
        // slidesToShow: 3,
        // slidesToScroll: 1,

        prevArrow: '<button class="btn-left"></button>',
        nextArrow: '<button class="btn-right"></button>',

        autoplay: true,
        autoplaySpeed: 2000,
    });
});