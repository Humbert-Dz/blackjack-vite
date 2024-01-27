import _ from "underscore";

/**
 * Esta funcion crea un un nuevo deck
 * @param {Array<String>} tiposDeCartas ejemplo: ["C", "D", "H", "S"],
 * @param {Array<String>} tiposEspeciales ejemplo: ["A", "J", "Q", "K"];
 * @returns Array<String>
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  // que hacer en caso de que no se envíe x parametro o esté vacío
  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error("tiposDeCartas es obligatorio como un arreglo de String");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposEspeciales es obligatorio como un arreglo de String");

  let deck = [];

  // creacion de cartas normales 2C, 2D, etc.
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  //   creacion de cartas especiales AC-AD-AH-AS, JC-JD-JC-JH-JS, etc.
  for (let tipo of tiposDeCartas) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }

  //   desordenando arreglo con función de libreria
  return _.shuffle(deck);
};
