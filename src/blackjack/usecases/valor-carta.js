/**
 * ! funcion que permite determinar el valor de una carta
 * @param {String} carta a definir valor
 * @returns {Number} valor de carta
 */
export const valorCarta = (carta) => {
  if (!carta || carta.length === 0)
    throw new Error("La carta es obligatoria recibirla");

  // obtener el valor de la carta
  // 10C: 10
  // 1S: 1
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
};
