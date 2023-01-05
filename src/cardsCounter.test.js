/*
* @jest-environment jsdom
*/

const cardsCounter = require('./cardsCounter.js');

// Arrange
let toDisplay = '';
const pokemon = [{
  name: 'charizard',
},
{
  name: 'bulbasaur',
},
{
  name: 'ditto',
},
{
  name: 'charmander',
}];
for (let i = 0; i < pokemon.length; i += 1) {
  toDisplay += `<div class="cards">
      <div class="features"><span>${pokemon[i].name}</span><div class="likes"><button type="button" class="like" value="${pokemon[i].name}"></button><span id="${pokemon[i].name}">likes</span></div></div>
      <button class="comments" value="${pokemon[i].name}">Comments</button>
      </div>`;
}
document.body.innerHTML = toDisplay;

// Act
const num = cardsCounter();

// Assert

test('example', () => {
  expect(num).toBe(4);
});
