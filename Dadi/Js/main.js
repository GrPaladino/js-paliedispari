// - chiedo all'utente pari e dispari e un numero da 1 a 5 con un prompt
const userType = prompt("Scegli pari o dispari");
while (userType != "pari" && userType != "dispari") {
  alert("Il valore inserito non é corretto");
  userType = prompt("Scegli pari o dispari");
}
console.log(userType);

let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
while (userNumber > 5) {
  alert("Il valore inserito non é corretto");
  userNumber = prompt("Inserisci un numero da 1 a 5");
}
console.log(userNumber);

// - generiamo un numero da 1 a 5 (con una funzione)
function getRandomNumber(min, max) {
  min = parseInt(min);
  max = parseInt(max);

  if (isNaN(min) || isNaN(max)) {
    console.error("I valori inseriti devono essere numerici");
    return;
  }
  if (min >= max) {
    console.error("Il valore massimo deve essere maggiore del valore minimo");
    return;
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

const computerNumber = getRandomNumber(1, 5);
console.log(computerNumber);

// - facciamo la somma dei due numeri
const addedNumber = userNumber + computerNumber;
console.log(addedNumber);

// - stabilisco se la somma dei due numeri é pari o dispari (con una funzione)

function isEven(addedNumber) {
  return addedNumber % 2 === 0;
}

let addedType = "";

if (isEven(addedNumber)) {
  addedType = "pari";
} else {
  addedType = "dispari";
}

// - se il numero corrisponde a cio' che ha scelto l'utente in precedenza (pari o dispari)
// - l'utente ha vinto
if (userType === addedType) {
  alert("l`unte ha vinto");
} else {
  alert("l`utente ha perso");
}
