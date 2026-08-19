/*4) Chico tem 1,50 metros de altura e cresce 2 centímetros por ano, enquanto 
Zé tem 1,10 metros e cresce 3 centímetros por ano. Construa uma função 
que recebe as alturas de Chico e Zé e retorne quantos anos serão 
necessários para que Zé seja maior que Chico.*/

function calculaAnos(alturaChico, alturaZe) {
  let anos = 0;

  while (alturaZe <= alturaChico) {
    alturaChico = alturaChico + 0.02;
    alturaZe = alturaZe + 0.03;
    anos = anos + 1;
  }

  return anos;
}

let totalAnos = calculaAnos(1.5, 1.1);
console.log("Anos necessários:", totalAnos);
