/*
 --- Exercício a ser executado no console do navegador ---
    Faça um programa para calcular o valor a ser gasto em combustível em uma viagem.
    Variáveis a serem criadas:
    - Preço do litro do etanol
    - Preço do litro da gasolina
    - Tipo de combustível suportado/utilizado pelo veículo
    - Gasto médio de combustível do carro por km
    - Distância a ser percorrida na viagem (em km)
    Imprima o valor a ser gasto para realizar esta viagem.
*/

const precoEtanol = 4.10;
const precoGasolina = 7.56;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

var valorGasto;
const litrosConsumidos = distanciaEmKm / kmPorLitros;

if(tipoCombustivel === 'Gasolina'){
    valorGasto = litrosConsumidos * precoGasolina;
} else {
    valorGasto = litrosConsumidos * precoEtanol;
}



console.log(`O valor a ser gasto na viagem é de R$ ${valorGasto.toFixed(2)}`);