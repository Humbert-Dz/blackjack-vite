// importamos toda la libreria underscore
import _ from "underscore";

import {
  crearDeck,
  pedirCarta,
  crearCarta,
  turnoPc,
  acumularPuntos,
} from "./usecases";

/**
 *  2C: two of clubs (TrébolesX)
 *  2D: two of diamonds (diamantes)
 *  2H: two of hearts (corazones)
 *  2S: two of spades (espadas)
 *
 **/

("use strict");

// ** deck de cartas
let deck = [];

//  arreglo con los tipos de cartas y otros con los tipos especiales
const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

// ** referencias botones HTML
const btnNuevoJuego = document.querySelector("#BtnNuevoJuego"),
  btnPedirCarta = document.querySelector("#BtnPedirCarta"),
  btnDetener = document.querySelector("#BtnDetener");

// arreglo con tableros de puntos y contenedores de cartas
const tableros = document.querySelectorAll("small"),
  divCartasJugadores = document.querySelectorAll(".contenedor_cartas");

// arreglo donde se guardará los puntos dependiendo los jugadores
let puntosJugadores = [0, 0];

// ! inicializar el juego
const iniciarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales);

  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);

    tableros[i].innerText = "0";

    divCartasJugadores[i].innerHTML = "";
  }

  btnPedirCarta.disabled = false;
  btnDetener.disabled = false;
};

//! Eventos
/**
 * * addEventListener(1er arg, 2do arg).
 * * 1er arg: indicamos que tipo de evento escuchará
 * * click: un click
 * * dbclick: dos clicks
 *
 * *2do arg: le enviamos una función directamente o una función que está fuera
 * estas funciones se llaman callback: una funcion que pasa como argumento a otra
 * se puede enviar una función tradicional, anonima o flecha.
 * */

// !btn pedir carta
btnPedirCarta.addEventListener("click", () => {
  // pedimos una carta
  const carta = pedirCarta(deck);

  // sumamos el puntaje de la carta
  const puntosJugador = acumularPuntos(puntosJugadores, 0, carta, tableros);

  const cartaHTML = crearCarta(carta);
  divCartasJugadores[0].append(cartaHTML);

  // evaluar si gana o pierde
  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;
    turnoPc(divCartasJugadores, puntosJugadores, deck, tableros);
  } else if (puntosJugador === 21) {
    console.warn("21, genial!");
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;
    turnoPc(divCartasJugadores, puntosJugadores, deck, tableros);
  }
});

// !btn detener
btnDetener.addEventListener("click", () => {
  btnPedirCarta.disabled = true;
  btnDetener.disabled = true;
  turnoPc(divCartasJugadores, puntosJugadores, deck, tableros);
});

// !btn iniciar nuevo juego
btnNuevoJuego.addEventListener("click", () => {
  iniciarJuego();
});
