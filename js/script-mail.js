/*Mail
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);*/

// AZIONE-1 CREO / INVENTO UN ARRAY CON DENTRO DELLE EMAIL
const emails = ["alessiocordari@gmail.com", "fabrimastro@gmail.com", "enricocamp@gmail.com", "marcolanci@gmail.com"];

// AZIONE-2 CHIEDO ALL'UTENTE TRAMITE UN PROMPT DI INSERIRE LA SUA EMAIL
const userEmail = prompt('Inserisci la tua email qui...', 'alessiocordari@gmail.com');

console.log(emails);
console.log(userEmail);


let cantAccess = "Spiacenti, email errata. Riprova"

for (let i = 0; i < emails.length; i++) {
    
    //AZIONE-3 CONTROLLA SE LA MAIL SIA NELLA LISTA
    if (userEmail == emails[i]) {
        /* AZIONE-4 STAMPA IN CONSOLE IL RISULTATO (SE PRESENTE NELLA LISTA "BENVENUTO" ALTRIMENTI SE NON PRESENTE NELLA LISTA "SPIACENTI")*/
        cantAccess = "Benvenuto"
    }
}
console.log(cantAccess)



/* AZIONE-4 STAMPA IN CONSOLE IL RISULTATO (SE NON PRESENTE NELLA LISTA "SPIACENTI")*/


