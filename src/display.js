import './popup.js'
import popupWindow from './popup.js';
const dislayPopup = () => {
    const btn = document.querySelectorAll('.comments');
    btn.forEach((element) => {
        const id = element.value;
      element.addEventListener('click', async () => {
        popupWindow(id);
        console.log(id);
      });
    });
  };

export default dislayPopup;