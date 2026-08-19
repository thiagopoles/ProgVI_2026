/*7) Faça uma função que receba um array com a idade de 10 pessoas e que 
calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 
anos. Utilize arrow function. */

const maioresIdade = (idades) => {
  let quantidade = 0;

  for (let i = 0; i < idades.length; i = i + 1) {
    if (idades[i] >= 18) {
      quantidade = quantidade + 1;
    }
  }

  console.log("Quantidade de maiores de 18:", quantidade);
  return quantidade;
};

let listaIdades = [12, 18, 20, 15, 30, 17, 14, 22, 19, 10];

maioresIdade(listaIdades);
