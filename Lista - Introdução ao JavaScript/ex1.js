/*1) Escreva uma função que leia três número inteiros e positivos (A, B, C) e 
calcule a seguinte expressão:*/

function calcularExpressao(A, B, C) {
  let R = (A + B) * (A + B);
  let S = (B + C) * (B + C);
  let D = (R + S) / 2;
  return D;
}

let resultado = calcularExpressao(2, 4, 6);
console.log("Resultado:", resultado);
