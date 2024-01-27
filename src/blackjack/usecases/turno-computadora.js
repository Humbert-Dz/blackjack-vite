import { determinarGanador, pedirCarta, acumularPuntos, crearCarta } from "./";

/**
 * Funcion para determinar al ganador
 * @param {Number} puntosMinimos para que gane la computadora
 * @param {Array<String>} deck de cartas
 */
export const turnoPc = (
  divCartasJugadores,
  puntosJugadores,
  deck,
  tableros
) => {
  if (!puntosJugadores || !deck)
    throw new Error("Puntos jugadores y deck es obligatorio");

  let puntosPc = 0;
  do {
    const carta = pedirCarta(deck);
    puntosPc = acumularPuntos(
      puntosJugadores,
      puntosJugadores.length - 1,
      carta,
      tableros
    );

    const cartaHTML = crearCarta(carta);
    divCartasJugadores[1].append(cartaHTML);
  } while (puntosPc <= puntosJugadores[0] && puntosJugadores[0] <= 21);

  determinarGanador(puntosJugadores);
};
