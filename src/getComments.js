import commentCounter from "./commentCounter.js";

const getData = async (pokemonAPI) => {
  try {
    const result = await fetch(pokemonAPI);
    const data = await result.json();
    return (data);
  } catch (error) {
    return error;
  }
};

const getComments = async (pokemon) => {
  const id = `#popup-${pokemon}`;
  const popupCont = document.querySelector(id);
  const counter = document.querySelector('.comments-title');
  const pokemonAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VO75gGUDh9DCGbQH7oFL/comments?item_id=${pokemon}`;
  const data = await getData(pokemonAPI);
  const commentscount=commentCounter(data);
  let popupGenerator = '';
  let counterGenerator = `Comments (${commentscount})`;
  data.forEach((user) => {
    popupGenerator += `
    <li class="comment">${user.username}: <span class="comment-content">${user.comment}</span></li>`;
  });
  popupCont.innerHTML = popupGenerator;
  counter.innerHTML = counterGenerator;
};

export default getComments;