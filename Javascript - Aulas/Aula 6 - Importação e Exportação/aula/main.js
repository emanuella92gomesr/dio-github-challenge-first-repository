const funcoes = require('./funcoesAuxiliares');
//Ou: const { gets, print } = require('./funcoesAuxiliares');

//Output: { gets: [Function: gets], print: [Function: print] }
console.log(funcoes);
//Output: 10
console.log(funcoes.gets());


/*
São equivalentes
const { nome } = pessoa; // destructure
const nome = pessoa.nome;
*/