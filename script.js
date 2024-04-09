// script.js

// Inicializa o contador
let count = 0;

// Seleciona os elementos necessários
const counterElement = document.getElementById('contador');
const increaseButton = document.getElementById('aumentar');
const decreaseButton = document.getElementById('diminuir');
const resetButton = document.getElementById('reset');

// Adiciona um event listener ao botão de aumentar
increaseButton.addEventListener('click', function() {
    count++; // Incrementa o contador
    counterElement.textContent = count; // Atualiza o texto do elemento contador
});

// Adiciona um event listener ao botão de diminuir
decreaseButton.addEventListener('click', function() {
    if (count > 0) { // Verifica se o contador é maior que 0
        count--; // Decrementa o contador
        counterElement.textContent = count; // Atualiza o texto do elemento contador
    }
});

// Adiciona um event listener ao botão de reset
resetButton.addEventListener('click', function() {
    count = 0; // Redefine o contador para 0
    counterElement.textContent = count; // Atualiza o texto do elemento contador
});