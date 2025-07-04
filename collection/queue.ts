import ler = require("readline-sync"); //Importando a biblioteca para acessar os métodos
import { Queue } from "./queueMetodos"; //Importando a classe para acessar os métodos

const fila = new Queue<string>();//Criando uma variavel do tipo FILA(Primeiro que entra, Primeiro que sai).
let continua: string = " ";


do{
    console.log("####### Fila de atendimento ###############");
    console.log("### Digite 1 cadastrar usuario ############");
    console.log("### Digite 2 finalizar atendimento ########");
    console.log("### Digite 3 ver lista de usuario #########");
    console.log("### Digite 4 ver proximo da fila 3#########");
    let opcao = ler.questionInt(" -> ");

    switch(opcao){
        case 1:
            fila.enqueue(ler.question("Nome: "));
            break;

        case 2:
            fila.dequeue();
            break;

        case 3:
            fila.printQueue();
            break;

        case 4:
            console.log(fila.peek());
            break;
        default:
            console.log("Opcao invalida!");
    }

    continua = ler.question(" Digite s para continuar: ")

}while(continua === "s");


