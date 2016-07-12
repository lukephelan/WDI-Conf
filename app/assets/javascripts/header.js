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
          var height = $(window).scrollTop();
          console.log(height);

        if (height < 580) {$('.navbar').css('margin-right', '-30%')}
        else {$('.navbar').css('margin-right', '2%')};

        if (height > 2318 && height < 3700 || height > 4273){$("#top").css('color', 'white')}
        else {$("#top").css('color', '#282CC1')}
        if (height > 2278 && height < 3660 || height > 4233){$("#conf").css('color', 'white')}
        else {$("#conf").css('color', '#282CC1')}
        if (height > 2238 && height < 3620 || height > 4193){$("#time").css('color', 'white')}
        else {$("#time").css('color', '#282CC1')}
        if (height > 2198 && height < 3580 || height > 4153){$("#profile").css('color', 'white')}
        else {$("#profile").css('color', '#282CC1')}
        if (height > 2158 && height < 3540 || height > 4113){$("#seats").css('color', 'white')}
        else {$("#seats").css('color', '#282CC1')}
        if (height > 2118 && height < 3500 || height > 4073){$("#sponsor").css('color', 'white')}
        else {$("#sponsor").css('color', '#282CC1')}
        if (height > 2078 && height < 3460 || height > 4033){$("#foot").css('color', 'white')}
        else {$("#foot").css('color', '#282CC1')}

    });
});
