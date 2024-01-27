/**
 * Funcion para determinar quien es el ganador
 * @param {Array<Number>} puntosJugadores
 */
export const determinarGanador = (puntosJugadores) => {
  if (!puntosJugadores) throw new Error("puntos jugadores es obligatorio!");

  // !desestructuracion de arreglos
  const [puntosMinimos, puntosPc] = puntosJugadores;

  setTimeout(() => {
    if (puntosPc === puntosMinimos) {
      alert("Nadie gana");
    } else if (puntosMinimos > 21) {
      alert("Gana la computadora!");
    } else if (puntosPc > 21) {
      alert("Gana el jugador!");
    } else {
      alert("Gana la computadora!");
    }
  }, 100);
};
