// ! OPERAZIONI PRELIMINARI
// Recuperiamo gli elementi
const timer = document.getElementById('timer');
const numbers = document.getElementById('random-numbers');

// Array di 5 numeri casuali
const randomNumbers = [];


// ! FUNZIONE 
// Chiedo all'utente di indovinare i 5 numeri
const answers = () => {

    const userNumbers = [];
    console.log(userNumbers);
  
    for (let j = 0; j < 5; j++) {
        number = parseInt(prompt('Inserisci un numero da 1 a 99!'));
        userNumbers.push(number);
    }

    return userNumbers;
}



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


// Inizializzo i secondi
let seconds = 5;
timer.innerText = seconds;

// ! FUNZIONE COUNTDOWN
const countdown = setInterval(() => {

    // Decremento il timer
    timer.innerText = --seconds;

    // Stoppo il timer allo 0
    if (seconds === 0) {
        timer.innerText = '0';

        // Faccio sparire i numeri random
        numbers.classList.add('d-none');
        clearInterval(countdown);

        // Invoco la funzione dei prompt dopo un tot
        setTimeout(answers, 300);

    }     
    
}, 1000);