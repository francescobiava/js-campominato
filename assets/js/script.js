// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

// variabili
var i, check, mines, score, userNum, numRandom;
mines = [];
score = 0;

// generatore random 16 numeri
while (mines.length < 16) {
  check = false;
  numRandom = getRndInteger(1, 100);
  i = 0;
  while ((i < 16) && (check === false)) {
    if (numRandom === mines[i]) {
      check = true;
    }
    i++;
  }
  if (check === false) {
    mines.push(numRandom);
  }
}

console.log(mines);

// input numero utente
// userNum = parseInt(prompt('Inserisci un numero da 1 a 100'));

// dichiarazione functions
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}