const getComments = async (pokemon) => {
    console.log(pokemon);
    const id= '#popup-'+pokemon;
    const popupCont = document.querySelector(id);
    const pokemonAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VO75gGUDh9DCGbQH7oFL/comments?item_id=${pokemon}`;
    console.log(popupCont);
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
    console.log(data);
    let popupGenerator = '';
    data.forEach((user) => {
        popupGenerator += `
    <li class="comment">${user.username}: <span class="comment-content">${user.comment}</span></li>`;
    });
    popupCont.innerHTML = popupGenerator;
  };

export default getComments;