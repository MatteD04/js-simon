//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const randArray = generateRandomArray(5, 1, 100);
console.log(randArray);

//visualizzare in pagina i numeri casuali
const numberGenerate = document.querySelector('#randnumber');
numberGenerate.innerHTML = randArray;

//far partire il timer di 30 secondi
let timer = 30;

const timerClock = document.querySelector('#clock');
timerClock.innerHTML = timer;

const clock = setInterval(function() {
    timer--;
    timerClock.innerHTML = timer;

    if(timer == 0) {
        clearInterval(clock);
        timerClock.innerHTML = 'tempo finito';
    }
}, 1000);





// funzione ch genera un array di arrayLength numeri random
// arrayLength -> numero intero che definisce la lunghezza dell'array tornato
// numMin -> numero intero minimo da generare
// numMax -> numero intero massimo da generare
// return: un array di arrayLength numeri random
function generateRandomArray(arrayLength, numMin, numMax) {
    // Creiamo un array vuoto
    const randomNumbersArray = [];

    // finche non ci sono arrayLength numeri nell'array:
    while(randomNumbersArray.length < arrayLength) {
        // genero un numero random
        const randNumber = getRndInteger(numMin, numMax);
        // se il numero random non esiste nell'array lo pusho
        if(!randomNumbersArray.includes(randNumber)) {
            randomNumbersArray.push(randNumber);
        }
    }
    return randomNumbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}