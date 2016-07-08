$(document).ready(function() {

  var pricePremium = 125.00;
  var priceGeneral = 75.00;

  // $.ajax({
  //   url: '/api/seats'
  // }).done(function(seats) {

    // Add number of rows of seats.
    var rowArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var seatsPerRow = 10;
    var rows = seats.length / seatsPerRow;

    for (var i=0; i<rows; i++) {
      var row = 'row' + rowArr[i];
      $('#seating-plan').append('<div class="row ' + row + '"></div>');
    }

    // Add seats to row with a class 'seat'.
    $('.row').each(function(index, value) {
      for (var j=0; j<seatsPerRow; j++) {
        var seatNo = ($(this).attr('class')[7]) + (j+1);
        $('<div class="seat" data-seat="' + seatNo + '"></div>').html(seatNo).appendTo(this);
      }
    });
    $('.rowA').children().addClass('premium');

    $.each(seats, function(index, seat) {

      if (seat.status.toLowerCase() === "taken" || seat.status.toLowerCase() === 'reserved') {
        var $seat = $("[data-seat='" + seat.seat_num + "']");
        $seat.addClass('taken');
      }
    });

    // Seat Selection
    $('.seat').click(function() {

      if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
      } else {
        $(this).addClass('selected');
        $(this).parent().attr('class')[7] + $(this).attr('class')[5]+ $(this).attr('class')[6];
      }

      // Store array of selected seats in a hidden input tag
      $('.seats-list').val(getSelectedSeats());

      // Append summary total to html:
      $('.orders-bar').html(displaySummary());
      if ($('.orders-bar').html() != '') {
        $('.orders-bar').addClass('show');
        $('.checkout-button').prop("disabled",false);
      } else {
        $('.orders-bar').removeClass('show');
        $('.checkout-button').prop("disabled",true);
      }
    });
  });

  // disable checkout button if no seats are selected
  $('.checkout-button').prop("disabled",true);

  // Function for calculating total charges
  function calculateTotal() {
    var total = 0;
    $('.selected').each(function(index, value) {
      var getSeat = this.getAttribute('data-seat')[0];
      if (getSeat === "A") {
        total = total + pricePremium;
      } else {
        total = total + priceGeneral;
      }
    });
    return total;
  }

  // Function for collecting selected seats in an array.
  function getSelectedSeats() {
    var seatsArr = [];
    $('.selected').each(function(index, value) {
      var seatNum = this.getAttribute('data-seat');
      seatsArr.push(seatNum);
    });
    return seatsArr;
  }

  // Function for displaying order summary at footer bar of page.
  function displaySummary() {
    var selectedPremium = $('.selected.premium').length;
    var selectedGeneral = $('.selected').not('.premium').length;
    var selectedTotal = calculateTotal().toFixed(2);
    var summary = '';

    if (selectedPremium === 0 && selectedGeneral === 0) {
      summary = '';
      return summary;
    } else if (selectedPremium === 0) {
      summary = selectedGeneral + '&nbsp; x &nbsp; General &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Total : &nbsp; $ ' + selectedTotal;
      return summary;
    } else if (selectedGeneral === 0) {
      summary = selectedPremium + '&nbsp; x &nbsp; Premium &nbsp;&nbsp;&nbsp;|   &nbsp;&nbsp;&nbsp; Total : &nbsp; $ ' + selectedTotal;
      return summary;
    } else {
      summary = selectedPremium + '&nbsp; x &nbsp; Premium, &nbsp;' + selectedGeneral + '&nbsp; x &nbsp;General &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Total : &nbsp; $ ' + selectedTotal;
      return summary;
    }
  }

});
