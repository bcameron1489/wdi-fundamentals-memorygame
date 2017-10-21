var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay.length <= 1) {
    console.log("Pick another card");

 } else if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    console.log("It's a Match!");

 } else {
     console.log("Sorry, try again.");

 }
}

var flipCard = function (cardId) {

    cardsInPlay.push(cards[cardId])
    console.log("User flipped" + ' ' + cards[cardId]);
    checkForMatch();
}

flipCard(0)
flipCard(2)
