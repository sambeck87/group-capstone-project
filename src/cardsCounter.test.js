/*
* @jest-environment jsdom
*/

const cardsCounter = require('./cardsCounter.js');

// Arrange
const Display = (pokemon) => {
  let toDisplay = '';
  for (let i = 0; i < pokemon.length; i += 1) {
    toDisplay += `<div class="cards">
      <div class="features"><span>${pokemon[i].name}</span><div class="likes"><button type="button" class="like" value="${pokemon[i].name}"></button><span id="${pokemon[i].name}">likes</span></div></div>
      <button class="comments" value="${pokemon[i].name}">Comments</button>
      </div>`;
  }
  document.body.innerHTML = toDisplay;
};

// Act
Display([{ name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }]);
const test1 = cardsCounter();

Display([]);
const test2 = cardsCounter();

Display([{ name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }, { name: 'charizard' }, { name: 'bulbasaur' }, { name: 'ditto' }, { name: 'charmander' }]);
const test3 = cardsCounter();

// Assert
test('The number of cards should be 4', () => {
  expect(test1).toBe(4);
});

test('The number of cards should be 0', () => {
  expect(test2).toBe(0);
});

test('The number of cards should be 0', () => {
  expect(test3).toBe(40);
});