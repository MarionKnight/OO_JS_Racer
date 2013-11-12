function updt_plyr_postion(player, pos) {
  // position goes from 0 to board_length-1;

  // ToDo: use .index() or .filter to refer to the #
  var player_board = $( '#' + player + '_strip td' );
  // ToDo: refactor to use player_board in this line
  var board_length = $( '#' + player + '_strip td' ).length;

  if ( pos + 1 <= board_length ) {
    // this leaves a residual blank class behind
    $( player_board[pos - 1]).removeClass("active");
    $( player_board[pos]).addClass("active");

  } else {
    alert("Game over!!");
  }

}

$(document).ready(function() {
  var player1_pos = 0;
  var player2_pos = 0;
  console.log("Player 1 use z; Player 2 use /");
  $(document).on('keypress', function(event) {
    if ( event.which === 122 ) {
      updt_plyr_postion("player1", player1_pos);
      player1_pos = player1_pos + 1;
    } else if ( event.which === 47 ) {
      updt_plyr_postion("player2", player2_pos);
      player2_pos = player2_pos + 1;
    } else {
      console.log( "Invalid key" + event.which );
    }

  });
});
