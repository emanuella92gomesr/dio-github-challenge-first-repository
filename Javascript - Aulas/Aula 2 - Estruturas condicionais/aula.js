/*declaração de valor do tipo boolean
const camisetaAzul = true;
const camisetaLaranja = false;

Imprime true
console.log (10 > 5);

== - ignora o tipo da variável
=== - leva em conta o tipo da variável
*/

const num = 100;
// const eNumeroPar = (num % 2) === 0;
// console.log("O número é par? " + eNumeroPar);

// if(eNumeroPar) {
//     console.log('É par');
// } else {
//     console.log('Não é par');
// }

const numeroDivisivelPorCinco = (num % 5) === 0;

if (num === 0 ){
    console.log('Número inválido');
} else if(numeroDivisivelPorCinco) {
    console.log(num + ' é divisível por 5');
} else {
    console.log(num + ' não é divisível por 5');
}
