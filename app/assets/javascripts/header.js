/*global $, location, document*/
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1400);
                return false;
            }
        }
    });

    function slider() {
        if (document.body.scrollTop > 800) //Show the slider after scrolling down 100px
            $('#slider').stop().animate({"margin-left": '0'});
        else
            $('#slider').stop().animate({"margin-left": '-200'}); //200 matches the width of the slider
    }

    $(window).scroll(function () {
        slider();
    });

});
