//Entrada de dados
function gets(){
    return 10;
};

//Saída de dados
function print(texto){
    console.log(texto);
};

//Saída de funcoesAuxiliares.js
//module.export.gets = gets;
module.exports = { gets: gets, print: print };