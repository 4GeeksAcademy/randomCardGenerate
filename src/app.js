/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const palos = ["♠", "♥", "♦", "♣"];

const generarCartaAleatoria = () => {
  const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  const carta = document.getElementById("carta");
  carta.querySelector(".numero").textContent = numeroAleatorio;
  carta.querySelector(".palo").textContent = paloAleatorio;
};

document
  .getElementById("generarCarta")
  .addEventListener("click", generarCartaAleatoria);
