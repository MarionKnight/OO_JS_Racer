var player1_pos = 0;
var player2_pos = 0;


//---------------------------------
// using prototypal oojs
//---------------------------------
// var Game = function(){}

// Game.prototype.play = function() {
//   console.log("Game start =)");
// };

//---------------------------------
// implies this driver code
//---------------------------------

// var game = new Game();
// game.play();

//=================================
//=================================

//---------------------------------
// using object literals
//---------------------------------

var Game = {

  play : function() {
    console.log("Game start =)");
  },

  resetBoard : function() {
    $( '#player1_strip td' ).removeClass( "active" );
    $( '#player2_strip td' ).removeClass( "active" );

    $( $( '#player1_strip td' )[0] ).addClass("active");
    $( $( '#player2_strip td' )[0] ).addClass("active");
  },

  announce : function() {
    console.log("Instructions: \nPlayer 1 use z; Player 2 use /");
  },

  move_pl1_if_key122 : function() {
    $(document).on( 'keypress', function( event ) {

      if ( event.which === 122 ) {

        updt_plyr_position("player1", ++player1_pos);

      }
    })
  },

  move_pl2_if_key47 : function() {
    $(document).on( 'keypress', function( event ) {

      if ( event.which === 47 ) {

        updt_plyr_position("player2", ++player2_pos);

      }
    })
  },

  move_if_invalid_key : function() {
    $(document).on( 'keypress', function( event ) {

      if ( event.which !== 122 && event.which !== 47 ) {

        console.log( "Invalid key" + event.which );

      }

    });
  }

}


function updt_plyr_position(player, pos) {

  var board_length = 12;
  var player_board = $( '#' + player + '_strip td' );

  if ( pos + 1 <= board_length ) {
    // this leaves a residual blank class behind
    $( player_board[pos - 1]).removeClass("active");
    $( player_board[pos]).addClass("active");

  } else {

    alert(player + " Wins!!");

  }

}



//---------------------------------
// implies this driver code
//---------------------------------

// Game.play();

//=================================
//=================================

//---------------------------------
// using functions
//---------------------------------

// var playGame = function(){
//   console.log("Game start =)");
// }

//---------------------------------
// implies this driver code
//---------------------------------

// playGame();

//=================================
//=================================


$( document ).ready( function() {

  $( "#game_start" ).click( function( event ) {

    // var game = new Game();
    // game.play();
    // playGame();

    Game.play();
    Game.resetBoard();
    Game.announce();

    Game.move_pl1_if_key122;
    Game.move_pl2_if_key47;
    Game.move_if_invalid_key;
    // ToDo: a Game.end()

  });
});



