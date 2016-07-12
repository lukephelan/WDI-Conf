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
      // console.log("fired");
          var height = $(window).scrollTop();
          // console.log(height);

        if (height < 587) {
                  $('.navbar').css('margin-right', '-30%');
        } else {
                  $('.navbar').css('margin-right', '2%');
        }
    });
});
