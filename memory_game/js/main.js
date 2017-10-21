var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  }
];
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

    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped" + ' ' + cards[cardId].rank);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
}

flipCard(0)
flipCard(2)
