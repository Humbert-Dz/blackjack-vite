import { valorCarta } from "./valor-carta";
/**
 * ! funcion para acomular puntos jugador 0 = primer jugador y el úlitmo es la pc
 * @param {*} jugador
 * @param {*} carta
 * @returns
 */
export const acumularPuntos = (puntosJugadores, jugador, carta, tableros) => {
  puntosJugadores[jugador] += valorCarta(carta);
  tableros[jugador].innerText = puntosJugadores[jugador];
  return puntosJugadores[jugador];
};
