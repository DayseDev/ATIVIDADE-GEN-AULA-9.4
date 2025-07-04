//Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, 
//que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. 
//Em seguida, faça o que se pede: Mostre na tela todos os elementos da Collection Set. 


import readline = require("readline-sync");

const list: Set<number> = new Set<number>();

console.log("Digite 10 numeros inteiros e nao repetidos: ");

for(let i = 1; i <= 10; i++){
    let num = readline.questionInt();
    list.add(num);    
}

const arrayOrdenado: number[] = [...list].sort((a,b) => a - b);

console.log("\nListar dados do Set: ");

for(let posicao of arrayOrdenado){
    console.log(posicao);
}





