/* Lista de exercícios*/

/* 1) Faça um algoritmo que, dado as três notas tiradas por um aluno em um semestre da faculdade, calcule
e imprima a sua média e a sua classificação conforme os dados abaixo:

    -- Média < 5 -> reprovação;
    -- Média >= 5 && <= 7 -> recuperação
    -- Média > 7 -> passou de semestre

    Fórmula da média: (nota1 + nota2 + nota3) / 3
*/

const nota1 = 9.6;
const nota2 = 7.0;
const nota3 = 6.0;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5.0) {
    console.log(`Você está reprovado. Sua média é ${media.toFixed(2)}.`);
} else if (media >= 5.0 && media <= 7.0) {
    console.log(`Você está de recuperação. Sua média é ${media.toFixed(2)}.`);
} else {
    console.log(`Você está aprovado. Sua média é ${media.toFixed(2)}.`);
}

console.log('\n');

/*2) Elabore um algoritmo em que, dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

    -- Abaixo de 18.5 : Abaixo do peso
    -- Entre 18.5 e 25: Peso normal
    -- Entre 25 e 30: Acima do peso
    -- Entre 30 e 40: Obeso
    -- Acima de 40: Obesidade grave

    Fórmula do IMC: peso / (altura^2)
*/

const peso = 65;
const altura = 1.75;
const alturaAoQuadrado = Math.pow(altura, 2);

const imc = peso / alturaAoQuadrado;

if (imc < 18.5) {
    console.log(`IMC = ${imc.toFixed(2)}. Você está abaixo do peso.`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`IMC = ${imc.toFixed(2)}. Você está com o peso normal.`);
} else if (imc >= 25 && imc < 30){
    console.log(`IMC = ${imc.toFixed(2)}. Você está acima do peso.`);
} else if (imc >= 30 && imc < 40) {
    console.log(`IMC = ${imc.toFixed(2)}. Você está com obesidade.`);
} else {
    console.log(`IMC = ${imc.toFixed(2)}. Você está com obesidade grave.`);
}

console.log('\n');

/*3)Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de
etiqueta e a escolha da condição de pagamento.
Utilize os dados da tabela abaixo para ler qual a condição de pagamento escolhida e efetuar o cálculo.

    -- À vista - Débito -> 10% de desconto (1)
    -- À vista - Dinheiro ou pix -> 15% de desconto (2)
    -- Em 2 vezes -> Preço normal da etiqueta sem juros (3)
    -- Acima de 2 vezes -> Preço normal da etiqueta + juros de 10% (4)
*/

const precoEtiqueta = 100.00;
const formaDePagamento = 4;

let totalPagamento;

switch (formaDePagamento) {
    /*Pode ser, por exemplo, if(formaDePagamento === 1) */
    case 1:
        totalPagamento = precoEtiqueta - (precoEtiqueta * 0.1);
        console.log(`Valor total da compra: ${totalPagamento.toFixed(2)}`);
        break;
    case 2: 
        totalPagamento = precoEtiqueta - (precoEtiqueta * 0.15);
        console.log(`Valor total da compra: ${totalPagamento.toFixed(2)}`);
        break;
    case 3:
        totalPagamento = precoEtiqueta;
        console.log(`Valor total da compra: ${totalPagamento.toFixed(2)}`);
        break;
    case 4: 
        totalPagamento = precoEtiqueta + (precoEtiqueta * 0.1);
        console.log(`Valor total da compra: ${totalPagamento.toFixed(2)}`);
        break;
    default:
        console.log('Opção inválida!');
        break;
}





