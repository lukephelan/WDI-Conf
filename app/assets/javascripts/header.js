/*global $, scrollTop, location, document*/
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


    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 100) {
            $("navbar").removeClass("hidden").addClass("visable");
        } else {
            $("navbar").removeClass("visable").addClass("hidden");
        }
    });

    $('window').scroll(function () {
        var height = $(window).scrollTop();
        console.log(height);
        if (height < 500) {
            $('.navbar').css('margin-right', '-8%');
        } else {
            $('.navbar').css('margin-right', '1%');
        }
    });
});
