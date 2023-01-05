import popupWindow from './popup.js';
import getComments from './getComments.js';

const dislayPopup = () => {
  const btn = document.querySelectorAll('.comments');
  btn.forEach((element) => {
    const id = element.value;
    element.addEventListener('click', async () => {
      popupWindow(id);
    });
  });
};

export default dislayPopup;