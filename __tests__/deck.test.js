const Deck = require('../src/Deck');

describe('Given a deck of playing cards', () => {
  const deck = new Deck();
  deck.create();

  it('should have the 4 suits', () => {
    const expectedSuits = new Set(['Spades', 'Clubs', 'Diamonds', 'Hearts']);

    function collectsuitsInDeck(deck) {
      const suits = new Set();
      let i = 0;
      const cards = deck.cards;
      while (suits.size < 4) {
        const suit = cards[i].suit;
        if (!suits.has(suit)) {
          suits.add(suit);
        }
        i++;
      }
      return suits;
    }

    expect(expectedSuits).toEqual(collectsuitsInDeck(deck));
  });
});
