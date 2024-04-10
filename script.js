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

document.querySelector('#toggleTheme input[type="checkbox"]').addEventListener('change', function() {
    var body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});

document.getElementById('addCounter').addEventListener('click', function() {
    createCounter();
});

function createCounter() {
    var counterContainer = document.createElement('div');
    var counterValue = document.createElement('div');
    var increaseButton = document.createElement('button');
    var decreaseButton = document.createElement('button');
    var resetButton = document.createElement('button');
    var deleteButton = document.createElement('button');

    deleteButton.classList.add('counter', 'button');
    deleteButton.textContent = 'Excluir';

    deleteButton.addEventListener('click', function() {
        counterContainer.remove();
    });

    counterContainer.appendChild(deleteButton);

    counterContainer.classList.add('counter', 'added-counter');
    counterValue.classList.add('counter', 'value');
    increaseButton.classList.add('counter', 'button');
    decreaseButton.classList.add('counter', 'button');
    resetButton.classList.add('counter', 'button');

    counterValue.textContent = '0';
    increaseButton.textContent = 'Aumentar';
    decreaseButton.textContent = 'Diminuir';
    resetButton.textContent = 'Reset';

    increaseButton.addEventListener('click', function() {
        counterValue.textContent = parseInt(counterValue.textContent) + 1;
    });

    decreaseButton.addEventListener('click', function() {
        counterValue.textContent = parseInt(counterValue.textContent) - 1;
    });

    resetButton.addEventListener('click', function() {
        counterValue.textContent = '0';
    });

    counterContainer.appendChild(counterValue);
    counterContainer.appendChild(increaseButton);
    counterContainer.appendChild(decreaseButton);
    counterContainer.appendChild(resetButton);

    document.getElementById('countersContainer').appendChild(counterContainer);
}