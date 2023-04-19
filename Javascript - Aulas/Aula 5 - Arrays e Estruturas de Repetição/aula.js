/*const alunos = ['João', 'Victor', 'Maria'];
//Adiciona na última posição
alunos.push('Renan');
//Adiciona diretamente na posição (Pode substituir um elemento existente na posição)
alunos[4]= 'Vitória';
console.log(alunos);
//Remove o elemento que está 'no topo da pilha'
alunos.pop();
console.log(alunos);
//Remove o 1º elemento 
alunos.shift();
console.log(alunos);
//Adiciona na primeira posição
alunos.unshift('emma');
console.log(alunos);*/


const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

//Retorna o tamanho da lista. length também mostra o tamanho de uma string
// console.log('Passou' + notas.length);

let soma = 0;
//for(declaração da variável que será incrementada (não pode ser const); condicional - continua a percorrer ou para; incremento da variável)
for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma/notas.length;
console.log(`Média: ${media.toFixed(2)}`);

/*
const nome='emanuella'
for(let i = 0; i < nome.length; i++){
    const letra = nome[i]
    console.log(letra);
}
*/