import ler = require("readline-sync");
import { Stack } from "../collection/stackMetodos";

const pilha = new Stack<string>();

let continua: number = 0;

do{
    console.log("*******************************************");
    console.log("\n")
    console.log("      1 - Adicionar Livro na pilha         ");
    console.log("      2 - Listar todos os Livros           ");
    console.log("      3 - Retirar Livro da pilha           ");
    console.log("      0 - Sair                             ");
    console.log("\n")
    console.log("*******************************************");
    console.log("Entre com a opção desejada:                ");

    let opcao = ler.questionInt("\n\nDigite uma opcao: ");

    switch(opcao){
        case 1:
            pilha.push(ler.question("\nNome do Livro: "));
            console.log("\nPilha:\n");
            pilha.printStack()
            console.log("\nLivro Adicionado!\n");
            break;

    
        case 2:
            console.log("\nLista de livros na Pilha:\n")
            pilha.printStack();
            break;

    
        case 3:
            if(pilha.isEmpty()){
                console.log("A Pilha está vazia!");
            }else{
                console.log("\nPilha\n");
                pilha.pop();
                pilha.printStack();
                console.log("\nUm livro foi retirado da pilha!\n");
            }
            break;

   
        case 0:
            console.log("Programa Finalizado!");
            break;

        default:
            console.log("Opcao Invalida!");

    }

}while(continua == 0);