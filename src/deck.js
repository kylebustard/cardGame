const Card = require('./Card');

class Deck {
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
  }

  shuffle() {}
}

module.exports = Deck;
