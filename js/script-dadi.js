/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/


/*AZIONE-1 CREO UN ARRAY CHE CONTENGA TUTTE LE FACCE DEL DADO */
let randomNumber = [1, 2, 3, 4, 5, 6];

/*AZIONE-2 CHIEDO ALL'UTENTE TRAMITE UN PROMPT UN NUMERO DA 1 A 6*/
const userChoice = parseInt(prompt('Scegli un numero da 1 a 6'));
console.log(userChoice + ' scelta user');

/*AZIONE-3 GENERO UNA COSTANTE CON UN NUMERO RANDOM DA 1 A 6*/

const cpuChoice = Math.floor(Math.random() * 7 + 1);
console.log(cpuChoice + ' randomizzatore cpu');


for (let i = 0; i < randomNumber.length; i++) {
    if (userChoice > cpuChoice) {
        console.log('Hai vinto')
    } else if (userChoice < cpuChoice) {
        console.log('Hai perso')
    }
}




