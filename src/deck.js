const Card = require('./Card');

module.exports = class Deck {
  constructor() {
    this.cards = [];
  }

  create() {
    const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    const ranks = [
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'King',
      'Queen'
    ];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let i = 0;
    let s = 0;
    let r = 0;
    let v = 0;

    while (this.cards.length < 52) {
      this.cards[i++] = new Card(suits[s++], ranks[r++], values[v++]);
      if (s >= suits.length) s = 0;
      if (r >= ranks.length) r = 0;
      if (v >= values.length) v = 0;
    }
    return this;
  }

  shuffle() {
    const cards = this.cards;
    let cardsRemaining = cards.length;

    // Implement Fisher–Yates shuffle aka Knuth shuffle
    while (cardsRemaining) {
      // Select random index from cards remaining to be swapped.
      const i = Math.floor(Math.random() * cardsRemaining--);

      // Destructure & swap it with the current card.
      [cards[cardsRemaining], cards[i]] = [cards[i], cards[cardsRemaining]];
    }
  }

  cut() {
    const cards = this.cards;
    const middleIdx = Math.floor(cards.length / 2);
    const topHalf = cards.splice(0, middleIdx);
    cards.push(topHalf);
  }

  deal(numberOfPlayers) {
    const cards = this.cards;
    return _dealHand(numberOfPlayers, cards);
  }

  _dealHand(numberOfPlayers, cards) {
    while (cards.length) {
      _batchCards(numberOfPlayers, cards);
    }
  }
};
