$(function(){

    // When user clicks on a speaker photo, display the modal
    $('#thomas-pic, #profile-thomas').click(function() {
        $('#modal-thomas').css("display", "block");
    });

    $('#thomas-pic, #profile-thomas').hover(
        function() {
            $('#profile-thomas').css('border', '.2em solid black');
            $('#thomas-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-thomas').css('border', '.2em solid white');
            $('#thomas-pic').css('border', '.2em solid white');
    });

    $('#luke-pic, #profile-luke').click(function() {
        $('#modal-luke').css("display", "block");
    });

    $('#luke-pic, #profile-luke').hover(
        function() {
            $('#profile-luke').css('border', '.2em solid black');
            $('#luke-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-luke').css('border', '.2em solid white');
            $('#luke-pic').css('border', '.2em solid white');
    });

    $('#yogi-pic, #profile-yogi').click(function() {
        $('#modal-yogi').css("display", "block");
    });

    $('#yogi-pic, #profile-yogi').hover(
        function() {
            $('#profile-yogi').css('border', '.2em solid black');
            $('#yogi-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-yogi').css('border', '.2em solid white');
            $('#yogi-pic').css('border', '.2em solid white');
    });

    $('#stephen-pic, #profile-stephen').click(function() {
        $('#modal-stephen').css("display", "block");
    });

    $('#stephen-pic, #profile-stephen').hover(
        function() {
            $('#profile-stephen').css('border', '.2em solid black');
            $('#stephen-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-stephen').css('border', '.2em solid white');
            $('#stephen-pic').css('border', '.2em solid white');
    });

    $('#ephrem-pic, #profile-ephrem').click(function() {
        $('#modal-ephrem').css("display", "block");
    });

    $('#ephrem-pic, #profile-ephrem').hover(
        function() {
            $('#profile-ephrem').css('border', '.2em solid black');
            $('#ephrem-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-ephrem').css('border', '.2em solid white');
            $('#ephrem-pic').css('border', '.2em solid white');
    });

    $('#mark-pic, #profile-mark').click(function() {
        $('#modal-mark').css("display", "block");
    });

    $('#mark-pic, #profile-mark').hover(
        function() {
            $('#profile-mark').css('border', '.2em solid black');
            $('#mark-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-mark').css('border', '.2em solid white');
            $('#mark-pic').css('border', '.2em solid white');
    });

    $('#brad-pic, #profile-brad').click(function() {
        $('#modal-brad').css("display", "block");
    });

    $('#brad-pic, #profile-brad').hover(
        function() {
            $('#profile-brad').css('border', '.2em solid black');
            $('#brad-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-brad').css('border', '.2em solid white');
            $('#brad-pic').css('border', '.2em solid white');
    });

    $('#yang-pic, #profile-yang').click(function() {
        $('#modal-yang').css("display", "block");
    });

    $('#yang-pic, #profile-yang').hover(
        function() {
            $('#profile-yang').css('border', '.2em solid black');
            $('#yang-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-yang').css('border', '.2em solid white');
            $('#yang-pic').css('border', '.2em solid white');
    });

    $('#niall-pic, #profile-niall').click(function() {
        $('#modal-niall').css("display", "block");
    });

    $('#niall-pic, #profile-niall').hover(
        function() {
            $('#profile-niall').css('border', '.2em solid black');
            $('#niall-pic').css('border', '.2em solid black');
        },
        function() {
            $('#profile-niall').css('border', '.2em solid white');
            $('#niall-pic').css('border', '.2em solid white');
    });

    // When the user clicks on <span> (x), close the modal
    $('.close').click(function() {
        $('.modal-speaker').css("display", "none");
    // spanThomas.onclick = function() {
    //     modalThomas.style.display = "none";
    })

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modalThomas.style.display = "none";
    //     }
    // }
});
