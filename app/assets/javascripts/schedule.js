$(function(){

    // When user hovers over the timetable session, display the modal
    $('.dropProfile').hover(function() {
        $('.dropContent').show()
												.css("width", "330px");
    });
		$('.dropContent').mouseleave(function() {
        $('.dropContent').css("display", "none");
    });
});
