const assert = require('assert');
const commentCounter = require('./commentCounter.js');

const comments = [
  {
    item_id: 'Charmander',
    username: 'Sofia',
    comment: 'So cute',
  },
  {
    item_id: 'Charmander',
    username: 'Dulce',
    comment: 'I like the color',
  },
];

describe('counts', () => {
  it('counts the number of comments', () => {
    assert(commentCounter(comments) === 2);
  });
});