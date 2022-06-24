/*Mail
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);*/

// AZIONE-1 CREO / INVENTO UN ARRAY CON DENTRO DELLE EMAIL
let emails = ['alessiocordari@gmail.com', 'fabrimastro@gmail.com', 'enricocamp@gmail.com', 'marcolanci@gmail.com'];

// AZIONE-2 CHIEDO ALL'UTENTE TRAMITE UN PROMPT DI INSERIRE LA SUA EMAIL
let userEmail = prompt('Inserisci la tua email qui...', 'alessiocordari@gmail.com');


for (let i = 0; i <= emails.length - 1; i++) {
    //AZIONE-3 CONTROLLA SE LA MAIL SIA NELLA LISTA
    if (emails[i] === userEmail) {
        /* AZIONE-4 STAMPA IN CONSOLE IL RISULTATO (SE PRESENTE NELLA LISTA "BENVENUTO" ALTRIMENTI SE NON PRESENTE NELLA LISTA "SPIACENTI")*/
        console.log('Benvenuto ' + userEmail);
    }

    else if (emails[i] !== userEmail) {
        console.log('Spiacenti');

    }
}


/* AZIONE-4 STAMPA IN CONSOLE IL RISULTATO (SE NON PRESENTE NELLA LISTA "SPIACENTI")*/


