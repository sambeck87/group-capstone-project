import { likesCounter, addLikes } from './likesCounter.js';

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';
const pokemons = ['bulbasaur', 'charmander', 'squirtle', 'caterpie', 'weedle', 'pidgey'];
let toDisplay = '';

const Display = async (pokeUrl) => {
  let pokemon;
  if (!pokeUrl) {
    return;
  }
  await fetch(pokeUrl)
    .then((response) => response.json())
    // eslint-disable-next-line
    .then((json) => pokemon = json);

  toDisplay += `<div class="cards">
      <img class="pokemonImg" src="${pokemon.sprites.other.dream_world.front_default}" alt="">
      <div class="features"><span>${pokemon.name}</span><div class="likes"><button type="button" class="like" value="${pokemon.name}"></button><span id="${pokemon.name}">likes</span></div></div>
      <button class="comments">Comments</button>
      </div>`;

  const cards = document.getElementById('pokemonCards');
  cards.innerHTML = `${toDisplay}`;

  likesCounter();
  addLikes();
};

pokemons.forEach((element) => {
  const finalUrl = `${pokemonAPI}${element}`;
  Display(finalUrl);
});

export default Display;
