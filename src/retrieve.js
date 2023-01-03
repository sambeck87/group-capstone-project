const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';
const pokemons = ['bulbasaur', 'charmander', 'squirtle', 'caterpie', 'weedle', 'pidgey'];
let toDisplay = '';

const Display = async (pokeUrl) => {
  let pokemon;
  await fetch(pokeUrl)
    .then((response) => response.json())
    // eslint-disable-next-line
    .then((json) => pokemon = json);

  toDisplay += `<div class="cards">
      <img class="pokemonImg" src="${pokemon.sprites.other.dream_world.front_default}" alt="">
      <div class="features"><span>${pokemon.name}</span><div class="likes"><button class="like"></button><span>likes</span></div></div>
      <button class="comments">Comments</button>
      </div>`;

  const cards = document.getElementById('pokemonCards');
  cards.innerHTML = `${toDisplay}`;
  return 0;
};

pokemons.forEach((element) => {
  const finalUrl = `${pokemonAPI}${element}`;
  Display(finalUrl);
});

export default Display;
