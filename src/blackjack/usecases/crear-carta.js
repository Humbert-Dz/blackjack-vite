// ! funcion para crear una carta HTML
export const crearCarta = (carta) => {
  const imgcarta = document.createElement("img");
  imgcarta.className = "cart";
  imgcarta.alt = `carta ${carta}.png`;
  imgcarta.src = `assets/images/cartas/${carta}.png`;
  return imgcarta;
};
