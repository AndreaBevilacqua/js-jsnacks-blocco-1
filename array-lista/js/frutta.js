console.log('JS OK')

// ESERCIZIO 1

/* 
 1 - Creo un array degli ingredienti all'interno del frigo
 2 - aggiungo tramite push la pesca
 3 - verifico se é presente il cocomero 
 4 - Creo messeggio per comunicare la presenza del cocomero o se non c'é 
*/

let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

let pesca = 'pesca';
frigo.push(pesca);

let cocomero = 'Non é presente';

for (let i = 0; i < frigo.length; i++) {
    if (frigo[i] === 'cocomero') {
        cocomero = 'É presente';
    }
}
console.log(cocomero);

if (cocomero) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}

