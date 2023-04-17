/*Elabore uma função que calcule o que deve ser pago por um produto, considerando o preço normal de
etiqueta e a escolha da condição de pagamento.
Utilize os dados da tabela abaixo para ler qual a condição de pagamento escolhida e efetuar o cálculo.

    -- À vista - Débito -> 10% de desconto (1)
    -- À vista - Dinheiro ou pix -> 15% de desconto (2)
    -- Em 2 vezes -> Preço normal da etiqueta sem juros (3)
    -- Acima de 2 vezes -> Preço normal da etiqueta + juros de 10% (4)
*/

function determinarValorFinal(precoEtiqueta, formaDePagamento){
    switch(formaDePagamento){
        case 1:
            return `Valor final da compra: ${precoEtiqueta - (precoEtiqueta * 0.1)}`;
            break;
        case 2: 
            return `Valor final da compra: ${precoEtiqueta - (precoEtiqueta * 0.15)}`;
            break;
        case 3: 
            return `Valor final da compra: ${precoEtiqueta}`;
            break;
        case 4: 
            return `Valor final da compra: ${precoEtiqueta + (precoEtiqueta * 0.1)}`;
            break;
        default:
            return "Opção de forma de pagamento inválida!";
    }
}

console.log(determinarValorFinal(4589.55, 1));
console.log(determinarValorFinal(4589.55, 6));
