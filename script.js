// script.js

// Inicializa o contador
let count = 0;

// Seleciona os elementos necessários
const counterElement = document.getElementById('contador');
const increaseButton = document.getElementById('aumentar');
const decreaseButton = document.getElementById('diminuir');
const resetButton = document.getElementById('reset');
const historyList = document.getElementById('listaHistorico');

// Variável para rastrear se o histórico está sendo atualizado
let isUpdatingHistory = false;

// Função para adicionar itens ao histórico
function addToHistory(action, count) {
    isUpdatingHistory = true; // Indica que o histórico está sendo atualizado
    const listItem = document.createElement('li');
    listItem.textContent = `Contador ${action} para ${count}`;
    historyList.appendChild(listItem);
    isUpdatingHistory = false; // Indica que a atualização do histórico foi concluída
}

// Adiciona um event listener ao botão de aumentar
increaseButton.addEventListener('click', function(event) {
    event.stopPropagation();
    count++; // Incrementa o contador
    counterElement.textContent = count; // Atualiza o texto do elemento contador
    addToHistory('aumentado', count);
});

// Adiciona um event listener ao botão de diminuir
decreaseButton.addEventListener('click', function(event) {
    event.stopPropagation();
    if (count > 0) { // Verifica se o contador é maior que 0
        count--; // Decrementa o contador
        counterElement.textContent = count; // Atualiza o texto do elemento contador
        addToHistory('diminuído', count);
    }
});

// Adiciona um event listener ao botão de reset
resetButton.addEventListener('click', function(event) {
    event.stopPropagation();
    count = 0; // Redefine o contador para 0
    counterElement.textContent = count; // Atualiza o texto do elemento contador
    addToHistory('resetado', count);
});

// Adiciona um event listener de rolagem ao documento
document.addEventListener('scroll', function(event) {
    if (isUpdatingHistory) { // Se o histórico está sendo atualizado
        event.preventDefault(); // Previne o comportamento padrão do evento de rolagem
    }
});