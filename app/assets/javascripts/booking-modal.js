$(function(){

  $('.checkout-button').click(function(){
    console.log('hello');
    $('.modal-overlay').show();
    $('.Nav-container').hide();
    $('.total-amount').text("Total: $"+$('#total').text());
  });

  $('.close-modal').click(function(){
    $('.modal-overlay').hide();
    $('.Nav-container').show();
  });

  $('.input-container-payment button').click(function(){
    var selectedSeats = $('.selected-seats').val();
    // window.location = "https://www.paypal.com/cgi-bin/webscr?&cmd=_xclick&business=thomaskanze@gmail.com&currency_code=AUD&amount=1000000&item_name=WDI Conf 2017";
  });

});
