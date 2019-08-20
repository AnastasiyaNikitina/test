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


$(".main-header li ul").hide(); // скрываем выпадающее меню
$(".main-header li table").hide();

$(".main-header li:has('.submenu-1')").hover(
    function() {
        $(".submenu-1").stop().fadeToggle(200);
    }
    // отбираем элемент списка, который содержит элемент с классом 
    //.submenu и добавляем ему функцию при наведении, которая 
    //показывает и скрывает выпадающее меню */
);

$(".main-header li:has('.submenu-2')").hover(
    function() {
        $(".submenu-2").stop().fadeToggle(200);
    }
);

$(".main-header li:has('.submenu-3')").hover(
    function() {
        $(".submenu-3").stop().fadeToggle(200);
    }
);

$(".main-header li:has('.submenu-4')").hover(
    function() {
        $(".submenu-4").stop().fadeToggle(200);
    }
);

$(".main-header li:has('.submenu-5')").hover(
    function() {
        $(".submenu-5").stop().fadeToggle(200);

    }
);

$(".main-header li:has('.submenu-6')").hover(
    function() {
        $(".submenu-6").stop().fadeToggle(200);
    }
);