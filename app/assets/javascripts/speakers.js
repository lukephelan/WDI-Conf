$(function(){

    // When user clicks on a speaker photo, display the modal
    $('#thomas-pic').click(function() {
        $('#modal-thomas').css("display", "block");
    });

    $('#thomas-pic').hover(
        function() {
            $('#profile-thomas').css('border', '.2em solid black');
        },
        function() {
            $('#profile-thomas').css('border', '.2em solid white');
        });

    $('#thomas-pic').hover(
        function() {
$('#profile-thomas').css('border', '.2em solid black');
        },
        function() {
            $('#profile-thomas').css('border', '.2em solid white');
        });

    $('#luke-pic').click(function() {
        $('#modal-luke').css("display", "block");
    });

    $('#luke-pic').hover(
        function() {
            $('#profile-luke').css('border', '.2em solid black');
        },
        function() {
            $('#profile-luke').css('border', '.2em solid white');
        });

    $('#yogi-pic').click(function() {
        $('#modal-yogi').css("display", "block");
    });

    $('#yogi-pic').hover(
        function() {
            $('#profile-yogi').css('border', '.2em solid black');
        },
        function() {
            $('#profile-yogi').css('border', '.2em solid white');
        });

    $('#stephen-pic').click(function() {
        $('#modal-stephen').css("display", "block");
    });

    $('#stephen-pic').hover(
        function() {
            $('#profile-stephen').css('border', '.2em solid black');
        },
        function() {
            $('#profile-stephen').css('border', '.2em solid white');
        });

    $('#ephrem-pic').click(function() {
        $('#modal-ephrem').css("display", "block");
    });

    $('#ephrem-pic').hover(
        function() {
            $('#profile-ephrem').css('border', '.2em solid black');
        },
        function() {
            $('#profile-ephrem').css('border', '.2em solid white');
        });

    $('#mark-pic').click(function() {
        $('#modal-mark').css("display", "block");
    });

    $('#mark-pic').hover(
        function() {
            $('#profile-mark').css('border', '.2em solid black');
        },
        function() {
            $('#profile-mark').css('border', '.2em solid white');
        });

    $('#brad-pic').click(function() {
        $('#modal-brad').css("display", "block");
    });

    $('#brad-pic').hover(
        function() {
            $('#profile-brad').css('border', '.2em solid black');
        },
        function() {
            $('#profile-brad').css('border', '.2em solid white');
        });

    $('#yang-pic').click(function() {
        $('#modal-yang').css("display", "block");
    });

    $('#yang-pic').hover(
        function() {
            $('#profile-yang').css('border', '.2em solid black');
        },
        function() {
            $('#profile-yang').css('border', '.2em solid white');
        });

    $('#niall-pic').click(function() {
        $('#modal-niall').css("display", "block");
    });

    $('#niall-pic').hover(
        function() {
            $('#profile-niall').css('border', '.2em solid black');
        },
        function() {
            $('#profile-niall').css('border', '.2em solid white');
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
