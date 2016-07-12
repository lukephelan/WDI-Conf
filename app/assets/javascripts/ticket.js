$(document).ready(function(){
​
	////////////////////////////////////////////////////////////
	// CREATE SEAT CHART IN HTML
	////////////////////////////////////////////////////////////
​
	// Specify the number of rows & seats per row (i.e. columns) in the seat chart.
	var rows = 7;
	var seatsPerRow = 10;
​
	function makeSeatChart(){
		for(var y = 0; y < rows; y++){
			// Create rows in the form
			var rowLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
			console.log(rowLetters);
			var row = $('<div>').addClass('row ' + rowLetters[y]);
​
			// Create seats (i.e. columns)by default.
			for(var x = 0; x < seatsPerRow; x++){
				row.append($('<div>')
					.attr({'data-selected': false, 'data-id' : rowLetters[y] + (x + 1)})
					.addClass('seat')
					.text(rowLetters[y] + (x + 1)));
			}
			$('.seatchart').append(row);
		}
		// // Ajax or something to get selected seats
		// for(var i = 0; i < selectedSeats.length; i++){
		// 	// Select the seat by name? If selected,  data-selected to true ,  if not, assign .attr('data-selected':"false")
		// 	$('.seat[data-id="'+data[i].name'"]').attr('data-selected', true);
		// };
	}
	makeSeatChart();
​
	////////////////////////////////////////////////////////////
	// CREATE MATRIX ARRAY TO RECORD SEAT AVAILABILITY
	////////////////////////////////////////////////////////////
​
	// Creates a nested array of rows & seatsPerRow.
	function makeSeatMatrix(defaultSeatState){
		var arr = [];
		for (var y = 0; y < rows; y++){
			var columns = [];
			for (var x = 0; x < seatsPerRow; x++){
				columns[x] = defaultSeatState;
			}
			arr[y] = columns;
		}
		return arr;
	};
	// Specify the default state of availability for seats. '0' represents that seats are available, '1' is selected, '2' is reserved.
	var seatMatrix = makeSeatMatrix(0);
​
	////////////////////////////////////////////////////////////
	// CHANGE SEAT AVAILABILITY BASED ON EVENTS
	////////////////////////////////////////////////////////////
	var seatstaken = []
​
	$('.seat').on('click', function(){
		// When clicking a seat, toggle between data-selected true & false.
		// var selected = $(this).attr('data-selected');
		$(this).attr('data-selected') == "false" ?
			($(this).attr('data-selected', true)):
			($(this).attr('data-selected', false));
​
		if (seatstaken.indexOf($(this).attr('data-id')) > -1){
			var i = seatstaken.indexOf($(this).attr('data-id'));
			if(i != -1) {
				seatstaken.splice(i, 1);
			}
		}
		else {
			seatstaken.push($(this).attr('data-id'));
		};
	});
​
	$('.button.book').on('click', function(){
		$.post("/seatings", { seating: seatstaken});
	});
});
