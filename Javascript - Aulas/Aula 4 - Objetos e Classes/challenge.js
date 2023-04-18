/* Exercícios - classes e objetos
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
    Crie um método que, dada a quantidade de quilômetros e o preço do combustível, nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    };

    calcularGastoDePercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
};

const c1 = new Carro("Mille", "Vermelho", 1/12);

const calcC1 = c1.calcularGastoDePercurso(70, 5).toFixed(2);
console.log(calcC1);

/*Classe: Pessoa (nome, peso, altura)
    Método: calcular o imc e apresentar uma resposta
    Instância: José, 70kg, 1.75m
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };

    calcularImc(peso, altura){
        let imc = this.peso / Math.pow(this.altura, 2);

        if(imc < 18.5){
            return `${this.nome} está abaixo do peso. IMC = ${imc.toFixed(2)}`;
        } else if(imc >= 18.5 && imc < 25){
            return `${this.nome} está com o peso normal. IMC = ${imc.toFixed(2)}`;
        } else if(imc >= 25 && imc < 30){
            return `${this.nome} está com sobrepeso. IMC = ${imc.toFixed(2)}`;
        } else if(imc >= 30 && imc < 40){
            return `${this.nome} está com obesidade. IMC = ${imc.toFixed(2)}`;
        } else {
            return `${this.nome} está com obesidade mórbida. IMC = ${imc.toFixed(2)}`;
        }
    };
};

const j = new Pessoa("José", 70, 1.75);
console.log(j.calcularImc());
