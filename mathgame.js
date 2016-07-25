"use strict";

$(document).ready(function() {
	
	var game = {
		money: 100
  };

	$('#goldId').text(game.money);
	$('#button').on('click', function() {
		$('#result').on('click').css('opacity', '1');

		var playerBet = +$('#amount').val();
		var playerGuess = +$('#playerNumber').val();
		var randomNumber = Math.floor((Math.random() * 10) + 1);
		if (playerGuess === randomNumber) {
		  game.money += playerBet;
		 	$('#result').text("You've guessed correctly, the number was " + randomNumber + " your new total is " + game.money); 
		 	$('span').text(game.money);
		 } 
		else if (playerGuess === randomNumber + 1 || playerGuess === randomNumber - 1) {
			$('#result').text("I'm sorry, your answer is incorrect. The answer was " + randomNumber + " ,but because you were so close, keep all your money!")
		} 
		else {
		  game.money -= playerBet;
		    $('#result').text("Sorry, you lost.  That'll be " + playerBet + " gold please.")
		      if (game.money <= 0 ) {
		        game.money = 0; 
		        $('#result').text("You have no more money to bet!");
		        $('#button').hide();
		        $('#restart').show();
		      }
		  $('span').text(game.money);
		  $('#test').text(randomNumber);
	      }
	 });

	$('#restart').on('click', function() {
		$('#button').show();
		$('#restart').hide();
		game.money = 100;
		$('#goldId').text(game.money);
	});
});