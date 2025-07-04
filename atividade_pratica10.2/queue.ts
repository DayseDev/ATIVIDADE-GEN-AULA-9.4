import ler = require("readline-sync");
import { Queue } from "../collection/queueMetodos";

const fila = new Queue<string>();

let continua: number = 0;



do{
    console.log("***************************************************");
    console.log("           1 - Adicionar cliente na fila           ");
    console.log("           2 - Listar todos os clientes            ");
    console.log("           3 - Retirar Cliente da fila             ");
    console.log("           0 - Sair                                ");
    console.log("***************************************************");
    console.log("Entre com a opção desejada: ");
    
    let opcao = ler.questionInt("\n\nDigite uma opcao: ");
    
    switch(opcao){
        case 1: 
            
            fila.enqueue(ler.question("\nNome: "));
            console.log("\nFila:\n");
            fila.printQueue()
            console.log("\nCliente Adicionado!\n");
            break;
            
        case 2: 
            console.log("\nLista de Clientes na Fila:\n")
            fila.printQueue();
            break;

        case 3:  
            if(fila.isEmpty()){
                console.log("A Fila está vazia!");
            }else{
                console.log("\nFila\n")
                fila.dequeue();
                fila.printQueue();
                console.log("\nO cliente foi Chamado!\n")
            }
            break;

        case 0:
            console.log("Programa Finalizado!");
            break;


        default:
            console.log("Opcao Invalida!");

    }

}while(continua == 0);






