/* 3. Refaça o exercício 1, agora use o MAP para fazer o triplo dos valores em seguida use o proprio MAP para imprimir o novo vetor */

var numeros = [2, 4, 6, 8, 10];

var mult = numeros.map((elem) => elem * 3);

mult.map((elem) => console.log(elem));
