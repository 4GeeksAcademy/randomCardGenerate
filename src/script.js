const suits = ["&hearts;", "&spades;", "&clubs;", "&diamonds"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function generarCartaAleatoria() {
  const paloAleatorio = suits[Math.floor(Math.random() * suits.length)];
  const valorAleatorio = values[Math.floor(Math.random() * values.length)];

  const carta = document.querySelector(".card");
  carta.innerHTML = `
    <span class="suit ${paloAleatorio.substr(1)}">${paloAleatorio}</span>
    <span class="value">${valorAleatorio}</span>
  `;
}

generarCartaAleatoria(); // Llama a la función al cargar la página

// Llama a la función para generar una nueva carta aleatoria cada vez que se actualiza la página
setInterval(generarCartaAleatoria, 1000); // Cambia el intervalo según tus preferencias
