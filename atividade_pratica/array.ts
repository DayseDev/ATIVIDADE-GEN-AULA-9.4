//Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. 
//O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no 
//Array, exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, o programa deverá 
//exibir na tela a mensagem: O número NN não foi encontrado!


import readline = require("readline-sync");

const list: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

let num = readline.questionInt("Digite o numero que voce deseja encontrar: ");
let posicao: number = list.indexOf(num);

if(posicao != -1){
    console.log(`O numero ${num} esta localizado na posição: ${posicao}`);
}else{
    console.log(`O ${num} não foi encontrado!`);
}




