$('.hamburger').click(function () {
    $('.head .container nav').toggle();
});


$(window).resize(function (ev) {
    var windowWidth = ev.target.innerWidth;
    if (windowWidth > 1024) {
        $('.head .container nav').show();
    } else if (windowWidth === 1024) {
        $('.head .container nav').hide();
    }
});


$(document).ready(function () {

    var slidesCounter = $('.slider .slide').length;
    var $sliderNav = $('.slider .slider-nav');
    var navHtml = '';
    var currentSlide = 1;

    for (var i = 0; i < slidesCounter; i++) {
        navHtml += '<li></li>';
    }

    $sliderNav.html(navHtml);
    $sliderNav.find('li:first-child').addClass('active');
    $('.slider').find('.slide:first-child').addClass('active');


    $('.arrow-right').click(function () {
        if (currentSlide < slidesCounter) {
            currentSlide++;
        } else {
            currentSlide = 1;
        }
        updateSlider();
    });

    $('.arrow-left').click(function () {
        if (currentSlide > 1) {
            currentSlide--;
        } else {
            currentSlide = slidesCounter;
        }
        updateSlider();
    });

    function updateSlider() {
        $('.slide').removeClass('active');
        $('.slide:nth-child(' + currentSlide + ')').addClass('active');
        $('.slider-nav li').removeClass('active');
        $('.slider-nav li:nth-child(' + currentSlide + ')').addClass('active');
    }

    $('.slider-nav li').click(function () {
        currentSlide = $(".slider-nav li").index($(this));
        currentSlide++;
        updateSlider();
    });


    function changeSlide() {
        setTimeout(function () {
            $('.arrow-right').click();
            changeSlide();
        }, 5000);
    }
//    changeSlide();


    $(".form-button").click(function (ev) {

        var $form = $(".contact-form");

        $form.slideUp(10000);
        
//        $form.addClass("hidden");
        ev.preventDefault();
//    ev.stopPropagation();
       // $(".send-form").removeClass("hidden");
       $(".send-form").slideDown(10000);
    });
    $(".once-again").click(function () {
        $(".send-form").slideUp(10000);
        //$(".send-form").addClass("hidden");
        var $form = $(".contact-form");
        $form.slideUp(10000);
//        $form.removeClass("hidden");

    });

});

