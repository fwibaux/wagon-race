
$(document).ready(function(){
  $(document).on('keyup', function(event) {
    // Display the ASCII code of the key pressed
    var player1 = $("#player1_race td.active");
    var player2 = $("#player2_race td.active");
    // console.log(event.keyCode);
    // alert("test");
    if (event.keyCode === 80) {
      player1.removeClass("active").next().addClass("active");
      if ($("#player1_race td:last-child").hasClass("active")) {
        alert("Player 1 wins")
      }
    } else if (event.keyCode === 81) {
      player2.removeClass("active").next().addClass("active");
      if ($("#player2_race td:last-child").hasClass("active")) {
      alert("Player 2 wins")
      }
    }
  });
  $(".clickable").on("click", function(e){
    $("td").removeClass("active");
    $("#player1_race td:first-child").addClass("active");
    $("#player2_race td:first-child").addClass("active");
  });
});
// var indexActive = ($(".active").index)
// $('.active').removeClass("active");
// $("td").index(indexActive + 1).addClass("active");
// var start = 1


