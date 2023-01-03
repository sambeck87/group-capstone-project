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
      <div class="features"><span>${pokemon.name}</span><div class="likes"><button type="button" class="like" value="${pokemon.name}"></button><span id="${pokemon.name}">likes</span></div></div>
      <button class="comments">Comments</button>
      </div>`;

  const cards = document.getElementById('pokemonCards');
  cards.innerHTML = `${toDisplay}`;

  const likeBtn = document.querySelectorAll('.like');
  //console.log(likeBtn);
  likeBtn.forEach(element => {
    const value = element.value;
    element.addEventListener('click', async () => {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VO75gGUDh9DCGbQH7oFL/likes', {
        method: 'POST',
        body: JSON.stringify({
          item_id: value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      likesConter();
    });
  });

  const likesConter = async () => {
    let poke;
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VO75gGUDh9DCGbQH7oFL/likes')
      .then(response => response.json())
      // eslint-disable-next-line
      .then(json => poke = json);
    for (let index = 0; index < poke.length; index += 1) {
      const likes = document.getElementById(poke[index].item_id);
      if (likes) {
        likes.innerHTML = `${poke[index].likes} likes`
      }
    }
  }
  likesConter();
  return 0;
};

pokemons.forEach((element) => {
  const finalUrl = `${pokemonAPI}${element}`;
  Display(finalUrl);
});

export default Display;
