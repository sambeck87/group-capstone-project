const cardsCounter = () => {
  const cards = document.querySelectorAll('.cards');
  return cards.length;
  };
  
  setTimeout(() => {
  const numberDisplay = document.getElementById('numberCards');
  numberDisplay.innerHTML = `${cardsCounter()} Pokemon Cards`;
  }, 2000);
  
  module.exports = cardsCounter;
  