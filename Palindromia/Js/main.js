// - Chiedo all'utente una parola con un prompt
let userWord = prompt("Inserisci una parola");

//   - Finché la parola é un numero
while (!isNaN(userWord)) {
  //     - Mando un alert di errore e richiedo la parola
  alert("La parola inserita non é valida");
  userWord = prompt("Inserisci una parola");
}

// - Creo una funzione per il controllo della parola

function checkWord() {
  let reverseWord = "";
  for (i = userWord.length - 1; i >= 0; i--) {
    reverseWord += userWord[i];
  }
  return reverseWord;
}

let reverseWord = checkWord();
c;
while (userWord != reverseWord) {
  alert("La parola inserita non é palindroma!! Inserire un`altra parola");
  prompt("Inserisci una parola");
}

if (userWord === reverseWord) {
  alert("Corretto");
}
