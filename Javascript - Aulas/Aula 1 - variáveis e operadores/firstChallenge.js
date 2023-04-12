/*
    --- Exercício a ser testado no console do navegador ---
    Faça um programa para calcular o valor gasto com combustível em uma viagem. 
    Você terá três variáveis:
    1 - Preço do combustível;
    2 - Valor médio de gasto do carro (km por litros)
    3 - Distância a ser percorrida na viagem (em KM)
    Imprima o valor que será gasto em combustível para realizar esta viagem. 
*/

var precoCombustivel = parseFloat(prompt('Digite o valor do preço do litro de combustível: '));
var kmPorLitros = parseFloat(prompt('Digite o valor médio gasto pelo seu carro (litros/km): '));
var distanciaEmKm = parseFloat(prompt('Digite o valor da distância a ser percorrida durante a viagem: '));

var litrosConsumidos = distanciaEmKm/kmPorLitros;
var valorGasto = litrosConsumidos * precoCombustivel;

alert("O valor a ser gasto na viagem será de: R$" + valorGasto.toFixed(2));