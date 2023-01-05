const cardsCounter = () => {
  const cards = document.querySelectorAll('.cards');
  const numberDisplay = document.getElementById('numberCards');
  numberDisplay.innerHTML = `${cards.length} Pokemon Cards`;
  return cards.length;
};

setTimeout(() => {
  cardsCounter();
}, 2000);

module.exports = cardsCounter;
