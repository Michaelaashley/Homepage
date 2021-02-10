
/* Hamburger Menu function 1 

$(document).ready(function () {
  $(".toggle").click(function () {
    $("#menu-btn").toggleClass('flip');
  });
});

*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}