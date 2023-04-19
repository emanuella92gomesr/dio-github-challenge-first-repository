/*Lista de exercícios
1) Crie um programa que dado um número imprima a sua tabuada
*/

//let num = parseInt(prompt("Digite um número inteiro: "));

let num = 5;
console.log(`Tabuada do ${num}\n`);
for(let i = 1; i<=10 ; i++){
    let resultado = num * i;
    console.log(`${num} * ${i} = ${resultado}`);
};

console.log('\n');

/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
*/

let listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`listaNumeros = ${listaNumeros}\n`);
console.log(`Elementos pares de listaNumeros:\n`);
for(let i = 0; i < listaNumeros.length; i++){
    const numero = listaNumeros[i];
    if(numero % 2 === 0){
        console.log(numero);
    };
};