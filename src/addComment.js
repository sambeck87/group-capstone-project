import getComments from "./getComments";
const addComment = async (itemID, user, comment) => {
  try {
    const result = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VO75gGUDh9DCGbQH7oFL/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemID,
          username: user,
          comment,
        }),
      },
    );
    getComments(itemID);
    return await result.json();
  } catch (error) {
    return error;
  }
};

export default addComment;