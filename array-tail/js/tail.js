console.log('JS OK')

// ESERCIZIO 2

/* 
 1 - Chiedo all'utente quanti numeri vuole
 2 - creo array con numeri compresi tra 1 e 100
 3 - chiediamo all'utente quanti elementi stampare
 4 - stampo gli elementi richiesti dall'utente
 */

 const elementArray = parseInt(prompt("Quanti numeri desideri generare?"));

 const randomNumbers = [];
 for(let i = 0; i < elementArray; i++){
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
 }

 console.table(randomNumbers);

 const printElement  = parseInt(prompt("Quanti elementi vuoi visualizzare?"));
 if (printElement > elementArray) {
    console.log("Error");
} else {
    const lastElements = randomNumbers.slice(-printElement);
    console.table(lastElements);
}
