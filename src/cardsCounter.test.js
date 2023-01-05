const cardsCounter = require('./cardsCouter,js');

//Arrange
const message = {
  addIncorrect: 'The add is incorrect',
}

const calculate = cardsCounter();

//Act

//Assert

    test(message.addIncorrect, () => {
      expect(calculate).toBe(6)
    });
