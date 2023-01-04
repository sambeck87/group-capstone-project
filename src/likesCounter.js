const likesCounter = async () => {
  let poke;
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VO75gGUDh9DCGbQH7oFL/likes')
    .then((response) => response.json())
    // eslint-disable-next-line
    .then(json => poke = json);
  for (let index = 0; index < poke.length; index += 1) {
    const likes = document.getElementById(poke[index].item_id);
    if (likes) {
      likes.innerHTML = `${poke[index].likes} likes`;
    }
  }
};

const addLikes = () => {
  const likeBtn = document.querySelectorAll('.like');
  likeBtn.forEach((element) => {
    const idName = element.value;
    element.addEventListener('click', async () => {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VO75gGUDh9DCGbQH7oFL/likes', {
        method: 'POST',
        body: JSON.stringify({
          item_id: idName,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      likesCounter();
    });
  });
};

export { addLikes, likesCounter };
