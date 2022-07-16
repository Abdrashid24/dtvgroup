$(document).ready(function(){
    let headerSlider = $('.header-slider');
    headerSlider.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        margin: 0,
        dots: true,
        dotsEach: true,
    });
    // header slider
    let tourSlider = $('.tour-slider');
    tourSlider.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        margin: 0,
        dots: true,
        dotsEach: true,
    });
    // tour slider
    $(window).scroll(function(){
        if($(window).scrollTop() > 1100 && $(window).scrollTop() < 1500){
            $('.choice-icon__left').removeClass('choice-icon__left-animate');
            $('.choice-icon__right').removeClass('choice-icon__right-animate');
        }
    });
    // animate icon
});