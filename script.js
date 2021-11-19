var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

function createDeck() {
  deck = new Array();
  for (var i = 0; i < values.length; i++) {
    for (var x = 0; x < suits.length; x++) {
      var weight = parseInt(values[i]);
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K") weight = 10;
      if (values[i] == "A") weight = 11;
      var card = { Value: values[i], Suit: suits[x], Weight: weight };
      deck.push(card);
    }
  }
}
function shuffle(deck) {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}
function getDeck() {
  let deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }

  return deck;
}
function renderDeck(deck) {
  document.getElementById("deck").innerHTML = "";

  for (var i = 0; i < deck.length; i++) {
    var card = document.createElement("div");
    var icon = "";
    if (deck[i].Suit == "hearts") icon = "&hearts";
    else if (deck[i].Suit == "spades") icon = "&spades";
    else if (deck[i].Suit == "diamonds") icon = "&diams";
    else icon = "&clubs";

    card.innerHTML = deck[i].Value + "" + icon;
    card.className = "card";
    document.getElementById("deck").appendChild(card);
  }
}
