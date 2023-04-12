//JavaScript - Aula 1
console.log("Declaração de variáveis - let, var e const");
let variavel = 10;
const pi = 3.14;
var nome = "emma";
console.log("1ª versão: variavel = " + variavel + " pi = " + pi + " nome = " + nome);
variavel = 20;
console.log("2ª versão: variavel = " + variavel + " pi = " + pi + " nome = " + nome);
//Erro -> Assignment to constant variable pi = 34;
variavel = variavel + 40;
console.log("3ª versão: variavel = " + variavel + " pi = " + pi + " nome = " + nome);
//Operadores matemáticos: +, -, *, /