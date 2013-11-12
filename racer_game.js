function updt_plyr_postion(player, pos) {
  // position goes from 0 to board_length-1;

  // ToDo: use .index() or .filter to refer to the #
  var player_board = $( '#' + player + '_strip td' )
  var board_length = $( '#' + player + '_strip td' ).length;

  if ( pos + 1 <= board_length ) {
    // this leaves a residual blank class behind
    $( player_board[pos - 1]).removeClass("active")
    $( player_board[pos]).addClass("active")

  } else {
    alert("Game over!!")
  }

}

