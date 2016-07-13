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



    // var height = $(window).scroll(function(){
    //     if ( height.scrollTop() > profileDiv &&  height.scrollTop() < sponsor) {
    //         $('#sponsor').css('color', 'white');
    //         $('#foot').css('color', 'white');
    //     } else {
    //       $('#sponsor').css('color', '#282CC1');
    //       $('#foot').css('color', '#282CC1');
    //
    //     }
    // });




        $(document).on("scroll", function () {
          var profileDiv = $("#Profile").offset().top;
          // var sponsor = $("#sponsors-wrapper").offset().top;
          var footerStart = $("#footerStart").offset().top;
          var bookingEnd = $("#bookingEnd").offset().top;
          // console.log('profileDiv : ' + profileDiv);
          // console.log('sponsor: '+ sponsor);
              var height = $(window).scrollTop();
              console.log("profil " + profileDiv);
              console.log('height ' + height);


            if (height < 450) {$('.navbar').css('margin-right', '-30%')}
            else {$('.navbar').css('margin-right', '2%')};

            // if (height < 485) {$('#top').css('margin-right', '-30%')}
            // else {$('#top').css('margin-right', '2%')};
            // if (height < 445) {$('#conf').css('margin-right', '-30%')}
            // else {$('#conf').css('margin-right', '2%')};
            // if (height < 405) {$('#time').css('margin-right', '-30%')}
            // else {$('#time').css('margin-right', '2%')};
            // if (height < 365) {$('#profile').css('margin-right', '-30%')}
            // else {$('#profile').css('margin-right', '2%')};
            // if (height < 325) {$('#seats').css('margin-right', '-30%')}
            // else {$('#seats').css('margin-right', '2%')};
            // if (height < 285) {$('#sponsor').css('margin-right', '-30%')}
            // else {$('#sponsor').css('margin-right', '2%')};
            // if (height < 245) {$('#foot').css('margin-right', '-30%')}
            // else {$('#foot').css('margin-right', '2%')};


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
            if (height+240 > profileDiv && height+240 < bookingEnd || height+240 > footerStart){$("#foot").css('color', 'white')}
            else {$("#foot").css('color', '#282CC1')}
    });




});
