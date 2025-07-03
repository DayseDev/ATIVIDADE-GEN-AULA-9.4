"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ler = require("readline-sync"); //Importando a biblioteca readline
var list = new Array(12, 75); //Criando uma lista do tipo Array que vai trabalhar com números
console.log("Coloque um numero na lista"); //Mensagem que será exebida para o usuário
list.push(ler.questionInt()); // Chamei a lista, acessei o método push para inserir informação na lista
console.log(list); //Imprime os numeros em formato de lista
console.table(list); //Imprime os numeros em formato de tabela
