const Deck = require('../src/Deck');

describe('Given a deck of playing cards', () => {
  const deck = new Deck().create();

  describe('When cards are dealt', () => {
    describe('The deck is first created', () => {
      function _propSetInDeck(cards, prop, propSize) {
        const propSet = new Set();
        let i = 0;
        while (propSet.size < propSize) {
          const elementInProperty = cards[i][prop];
          if (!propSet.has(elementInProperty)) {
            propSet.add(elementInProperty);
          }
          i++;
        }
        return propSet;
      }

      it('should have the 4 suits', () => {
        const expectedSuits = new Set([
          'Spades',
          'Clubs',
          'Diamonds',
          'Hearts'
        ]);
        const suitsInDeck = _propSetInDeck(deck.cards, 'suit', 4);

        expect(expectedSuits).toEqual(suitsInDeck);
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
        const ranksInDeck = _propSetInDeck(deck.cards, 'rank', 13);

        expect(expectedRanks).toEqual(ranksInDeck);
      });

      it('should have a range of values 1..13', () => {
        const expectedRange = [1, 13];
        function _getRange(cards) {
          let low = Infinity;
          let high = -Infinity;
          for (const card of cards) {
            if (card.value < low) low = card.value;
            if (card.value > high) high = card.value;
          }
          return [low, high];
        }

        expect(expectedRange).toEqual(_getRange(deck.cards));
      });
    });

    describe('When the deck is shuffled', () => {
      const prevCards = deck.cards.slice();
      deck.shuffle();

      xit('should have the same length of the previous deck of cards.', () => {
        expect(deck.cards.length).toEqual(prevCards.length);
      });

      it('should return a permutation of the previous deck of cards.', () => {
        const firstCard = deck.cards[0];
        const middleCard = deck.cards[Math.floor(deck.length / 2)];
        const lastCard = deck.cards[deck.length - 1];

        expect(firstCard).not.toBe(prevCards[0]);
        expect(middleCard).not.toBe(
          prevCards[Math.floor(prevCards.length / 2)]
        );
        expect(lastCard).not.toBe(prevCards[prevCards.length - 1]);
      });
    });

    xdescribe('When the cut is made', () => {
      const uncutCards = deck.cards;
      deck.cut();

      it('should swap the bottom half with the top half', () => {
        const len = deck.cards.length;
        const middleIdx = Math.floor(len / 2);

        expect(deck.cards.slice(middleIdx, len - 1)).not.toBe(
          uncutCards.slice(0, middleIdx)
        );
      });
    });

    describe('When cards are dealt', () => {
      const isDealt = deck.cards.length === 0 ? true : false;
      it('distributes cards one-at-a-time to players until the deck is gone', () => {
        expect(isDealt).toEqual(true);
      });
    });
  });
});
