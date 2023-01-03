const popupCont = document.querySelector('.popups-container');
const demoButton = document.querySelector('.demo-button');
const popupGenerator=`
  <div class="popup-container">
          <img class="card-img" src="#">
          <h1 class="card-name">Ditto</h1>
          <ul class="card-items">
            <li class="item"><span>Power</span><span>Water</span></li>
            <li class="item"><span>Habilities</span><span>Plant-based</span></li>
            <li class="item"><span>Nature</span><span>Plant</span></li>
          </ul>
          <h2 class="comments-title">Comments</h2>
          <ul class="comments">
            <li class="comment"><span class="comment-content">How lovely</span></li>
            <li class="comment"><span class="comment-content">That's smart</span></li>
          </ul>
          <button id="closing-button" class="closing-button"><svg class="closing-button-x" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></button>
        </div>`;

const closePopup = () => {
    popupCont.style.display='none';
}
const popupWindow = () =>{
        popupCont.innerHTML=popupGenerator;
        popupCont.style.display = 'flex';
        const closingButton = document.getElementById('closing-button');
        closingButton.addEventListener('click', closePopup);
}

demoButton.addEventListener('click', popupWindow);

export default popupWindow;