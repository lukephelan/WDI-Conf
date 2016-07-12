var price = 15; //price
$(document).ready(function() {
    var $cart = $('#selected-seats'), //Sitting Area
        $counter = $('#counter'), //Votes
        $total = $('#total'); //Total money

    var sc = $('#seat-map').seatCharts({
        map: [ //Seating charts
            'a[ID,A1]a[ID,A2]a[ID,A3]a[ID,A4]_a[ID,A6]a[ID,A7]a[ID,A8]a[ID,A9]',
            'a[ID,B1]a[ID,B2]a[ID,B3]a[ID,B4]a[ID,B5]a[ID,B6]a[ID,B7]a[ID,B8]a[ID,B9]',
            'a[ID,C1]a[ID,C2]a[ID,C3]a[ID,C4]a[ID,C5]a[ID,C6]a[ID,C7]a[ID,C8]a[ID,C9]',
            'a[ID,D1]a[ID,D2]a[ID,D3]a[ID,D4]a[ID,D5]a[ID,D6]a[ID,D7]a[ID,D8]a[ID,D9]',
            'a[ID,E1]a[ID,E2]a[ID,E3]a[ID,E4]a[ID,E5]a[ID,E6]a[ID,E7]__',
            'a[ID,F1]a[ID,F2]a[ID,F3]a[ID,F4]a[ID,F5]a[ID,F6]a[ID,F7]a[ID,F8]a[ID,F9]',
            'a[ID,G1]a[ID,G2]a[ID,G3]a[ID,G4]a[ID,G5]a[ID,G6]a[ID,G7]a[ID,G8]a[ID,G9]'
        ],

        // 'a[ID,LABEL]a[ID2,LABEL2]a___a[JUST_ID1]aa',

        naming: {
            top: false,
            // columns: ['A', 'B', 'C', 'D', 'E','F','G','H','I','J'],
            getLabel: function(character, row, column) {
                return column;
            }
        },
        legend: { //Definition legend
            node: $('#legend'),
            items: [
                ['a', 'available', 'Available'],
                ['a', 'unavailable', 'Sold']
            ]
        },
        click: function() { //Click event
            console.log(this.settings.row + " " + this.settings.label);
            console.log(this.status());
            if (this.status() == 'available') { //optional seat

                $('<li>R' + (this.settings.row + 1) + ' S' + this.settings.label + '</li>')
                    .attr('id', 'cart-item-' + this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart);

                $counter.text(sc.find('selected').length + 1);
                $total.text(recalculateTotal(sc) + price);

                return 'selected';
            } else if (this.status() == 'selected') { //Checked
                //Update Number
                $counter.text(sc.find('selected').length - 1);
                //update totalnum
                $total.text(recalculateTotal(sc) - price);

                //Delete reservation
                $('#cart-item-' + this.settings.id).remove();
                //optional
                return 'available';
            } else if (this.status() == 'unavailable') { //sold
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });
    //sold seat
    // sc.get(['1_2', '4_4', '4_5', '6_6', '6_7', '8_5', '8_6', '8_7', '8_8', '10_1', '10_2']).status('unavailable');

});
//sum total money
function recalculateTotal(sc) {
    var total = 0;
    sc.find('selected').each(function() {
        total += price;
    });

    return total;
}
