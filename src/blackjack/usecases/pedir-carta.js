/**
 * !Función que permite pedir una carta
 * @param {Array<String>} deck ejemplo [2C,2H]
 * @returns {String} que representa una carta
 */
export const pedirCarta = (deck) => {
  // validar si ya no existen elementos, va a tirar error
  if (!deck || deck.length === 0) {
    throw "Ya no hay cartas en el deck";
  }

  return deck.pop();
};
