const Deck = require('../src/Deck');

describe('Given a deck of playing cards', () => {
  const deck = new Deck();
  deck.create();

  function _propSetInDeck(cards, prop, propSize) {
    const propSet = new Set();
    let i = 0;
    while (propSet.size < propSize) {
      if (!propSet.has(cards[i][prop])) {
        propSet.add(cards[i][prop]);
      }
      i++;
    }
    return propSet;
  }

  it('should have the 4 suits', () => {
    const expectedSuits = new Set(['Spades', 'Clubs', 'Diamonds', 'Hearts']);
    const collectSuitsInDeck = _propSetInDeck(deck.cards, 'suit', 4);

    expect(expectedSuits).toEqual(collectSuitsInDeck);
  });

  it('should have the 13 ranks', () => {
    const expectedRanks = new Set([
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
    ]);
    const collectRanksInDeck = _propSetInDeck(deck.cards, 'rank', 13);

    expect(expectedRanks).toEqual(collectRanksInDeck);
  });

  it('should have a range of values 1..13', () => {
    const expectedRange = [1, 13];
    function getRange(cards) {
      let low = Infinity;
      let high = -Infinity;
      for (const card of cards) {
        if (card.value < low) low = card.value;
        if (card.value > high) high = card.value;
      }
      return [low, high];
    }

    expect(expectedRange).toEqual(getRange(deck.cards));
  });
});
