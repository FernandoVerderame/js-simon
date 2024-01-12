// ! OPERAZIONI PRELIMINARI
// Recuperiamo gli elementi
const timer = document.getElementById('timer');
const numbers = document.getElementById('random-numbers');

// Array di 5 numeri casuali
const randomNumbers = [];


// Template Literal
let listItems = '<ul class="five-numbers">';

// Genero 5 numeri casuali da visualizzare in pagina
for (let i = 0; i < 5; i++) {
    const generateRandomNumbers = Math.floor(Math.random() * 99) + 1;
    randomNumbers.push(generateRandomNumbers);
    listItems += `<li>${randomNumbers[i]}</li>`;
}

listItems += '</ul>';

// Inserisco in pagina i 5 numeri casuali
numbers.innerHTML = listItems;