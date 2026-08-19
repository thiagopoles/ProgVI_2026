/*5) Faça uma função que receba a data de nascimento de uma pessoa (dia, 
mês e ano) e retorne à idade da pessoa expressa em dias.*/

function calcularIdade(dia, mes, ano) {
  let diasDosAnos = (2026 - ano) * 365;
  let diasDosMeses = (8 - mes) * 30;
  let diasRestantes = 18 - dia;

  let totalDias = diasDosAnos + diasDosMeses + diasRestantes;
  return totalDias;
}

let idadeEmDias = calcularIdade(10, 5, 2000);
console.log("Idade expressa em dias:", idadeEmDias);
