/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/


/*AZIONE-2 GENERO UNA COSTANTE CON UN NUMERO RANDOM DA 1 A 6 PER L'UTENTE*/

const userChoice = Math.floor(Math.random() * 6 + 1);
console.log(userChoice + ' scelta user');

/*AZIONE-3 GENERO UNA COSTANTE CON UN NUMERO RANDOM DA 1 A 6 PER LA CPU*/

const cpuChoice = Math.floor(Math.random() * 6 + 1);
console.log(cpuChoice + ' randomizzatore cpu');

const button = document.getElementById("button-dice");



const userScore = document.getElementById('user-point');
const cpuScore = document.getElementById('cpu-point');
const result = document.getElementById('final-result');


button.addEventListener("click", function () {
    userScore.innerHTML = userChoice;
    cpuScore.innerHTML = cpuChoice;

    if (userChoice > cpuChoice) {
        result.innerHTML = 'You Won =)'
    } else if (userChoice < cpuChoice) {
        result.innerHTML = 'You Lost =('
    } else {
        alert("Ooops... stesso numero, premi f5 per giocare di nuovo");
    }

})





