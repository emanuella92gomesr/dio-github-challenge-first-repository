class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade, anoDeNascimento){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = new Date().getFullYear() - idade;
    };
    descrever(){
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e nasci em ${this.anoDeNascimento}`;
    };
};

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        return `${p1.nome} é mais velha do que ${p2.nome}`;
    } else if(p1.idade < p2.idade){
        return `${p1.nome} é mais jovem do que ${p2.nome}`;
    } else {
        return `${p1.nome} e ${p2.nome} possuem a mesma idade`;
    }
};

const e = new Pessoa('Emanuella', 31);
console.log(e.descrever());
const v = new Pessoa('Victor', 29);
console.log(v.descrever());
console.log(compararPessoas(v, e));