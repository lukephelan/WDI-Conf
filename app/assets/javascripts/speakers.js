$(function(){

    // When user clicks on a speaker photo, display the modal
    $('#thomas-pic').click(function() {
        $('#modal-thomas').css("display", "block");
    });

    $('#luke-pic').click(function() {
        $('#modal-luke').css("display", "block");
    });

    $('#yogi-pic').click(function() {
        $('#modal-yogi').css("display", "block");
    });

    $('#stephen-pic').click(function() {
        $('#modal-stephen').css("display", "block");
    });

    $('#ephrem-pic').click(function() {
        $('#modal-ephrem').css("display", "block");
    });

    $('#mark-pic').click(function() {
        $('#modal-mark').css("display", "block");
    });

    $('#brad-pic').click(function() {
        $('#modal-brad').css("display", "block");
    });

    $('#yang-pic').click(function() {
        $('#modal-yang').css("display", "block");
    });

    $('#niall-pic').click(function() {
        $('#modal-niall').css("display", "block");
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
