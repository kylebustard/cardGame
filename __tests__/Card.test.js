const Card = require('../src/Card');

describe('Given a card', () => {
  it('has a suit, rank, and value', () => {
    const card = new Card('Hearts', 'Queen', 12);
    const expected = { suit: 'Hearts', rank: 'Queen', value: 12 };

    expect(card).toEqual(expect.objectContaining(expected));
  });
});
