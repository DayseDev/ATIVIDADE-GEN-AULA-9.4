import ler = require("readline-sync"); //Importando a biblioteca readline
const list: Array<Number> = new Array<Number>(12,75); //Criando uma lista do tipo Array que vai trabalhar com números
let opcao: number //Criando uma variável do tipo number

opcao = ler.questionInt("Digite 1 para cadastrar \nDigite 2 para deletar \nDigite 3 para imprimir");

switch(opcao){
    case 1:
        console.log("Coloque um numero na lista: ");
        list.push(ler.questionInt());

        break;

    case 2:
        list.pop();

        break;
    
    case 3:
        console.table(list);

        break;
}