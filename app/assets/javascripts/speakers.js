<<<<<<< HEAD
// $(function(){
//
//     // Get the Thomas modal
//     var modal = document.getElementById('myModal');
//     // Get the Luke modal
//     var modal = document.getElementById('myModal');
//
//     // Get the button that opens the modal
//     var btn = document.getElementById("myBtn");
//
//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];
//
//     // When the user clicks the button, open the modal
//     btn.onclick = function() {
//         modal.style.display = "block";
//     }
//
//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         modal.style.display = "none";
//     }
//
//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// });
=======
$(function(){

    // Get the Thomas modal
    var modalThomas = document.getElementById('modal-thomas');
    // Get the Luke modal
    // var modal = document.getElementById('myModal');

    // Get the image that opens the modal
    // var imageThomas = document.getElementById('thomas-pic');

    // Get the <span> element that closes the modal
    var spanThomas = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal
    $('#thomas-pic').click(function() {
        // Jquery to show and hide stuff
        console.log("Hello");
        modalThomas.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    spanThomas.onclick = function() {
        modalThomas.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modalThomas.style.display = "none";
        }
    }
});
>>>>>>> fb8a8f92232a88db9b09b986ec09e728e18db348
