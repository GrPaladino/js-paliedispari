// - Chiedo all'utente una parola con un prompt
let userWord = prompt("Inserisci una parola");

//   - Finché la parola é un numero
while (!isNaN(userWord)) {
  //     - Mando un alert di errore e richiedo la parola
  alert("La parola inserita non é valida");
  userWord = prompt("Inserisci una parola");
  console.log(userWord);
}

// - Creo una funzione per il controllo della parola
//   - Controllo con un ciclo for che l parola é palindroma
