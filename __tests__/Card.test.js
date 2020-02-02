const Card = require('../src/Card');

describe('Given a card', () => {
  it('has a suite, rank, and value', () => {
    const card = new Card('Hearts', 'Queen', 12);
    const expected = { suite: 'Hearts', rank: 'Queen', value: 12 };

    expect(card).toEqual(expect.objectContaining(expected));
  });
});
