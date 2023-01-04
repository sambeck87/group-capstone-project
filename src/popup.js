const popupCont = document.querySelector('.popups-container');
const closePopup = () => {
  popupCont.style.display = 'none';
};
const popupWindow = async (pokemon) => {
const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/'+pokemon;
const getData = async () => {
    try {
      const result = await fetch(pokemonAPI);
      const data = await result.json();
      return (data);
    } catch (error) {
      return error;
    }
  };
  const data = await getData();
  let popupGenerator = '';
  popupGenerator = `
  <div class="popup-container">
          <img class="card-img" src="${data.sprites.other.dream_world.front_default}">
          <h1 class="card-name">${data.name}</h1>
          <ul class="card-items">
            <li class="item"><span>Ability</span><span>${data.abilities[0].ability.name}</span></li>
            <li class="item"><span>HP</span><span>${data.stats[0].base_stat}</span></li>
            <li class="item"><span>Move</span><span>${data.moves[0].move.name}</span></li>
          </ul>
          <h2 class="comments-title">Comments</h2>
          <form id="my-form">
          <input id="add-comment-box" type="text" class="add-comment-box" placeholder="Add a comment">
          <button class="add-comment-button" type="submit">Add</button>
          </form>
          <ul class="comments">
            <li class="comment"><span class="comment-content">How lovely</span></li>
            <li class="comment"><span class="comment-content">That's smart</span></li>
          </ul>
          <button id="closing-button" class="closing-button"><svg class="closing-button-x" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></button>
        </div>`;
  popupCont.innerHTML = popupGenerator;
  popupCont.style.display = 'flex';
  const closingButton = document.getElementById('closing-button');
  closingButton.addEventListener('click', closePopup);
};

export default popupWindow;