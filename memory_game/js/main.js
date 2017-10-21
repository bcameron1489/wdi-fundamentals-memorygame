var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User Flipped" + ' ' + cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User Flipped" + ' ' + cardTwo);
if (2 === cardsInPlay.length && cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
}


