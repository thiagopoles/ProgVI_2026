// Crie 3 vetores com 5 elementos um para nomes, idades e outro para notas //
// imprima o primeiro vetor com os nomes com as respectivas idades e no fim imprima as notas //

let nomes = ["Thiago", " Laura", " Anthony", " Pedro", " Bottin"];
let idade = [18, 17, 18, 19, 22];
let notas = [1, 6, 2, 9, 20];

for (let i = 0; i < nomes.length; i++) {
  console.log("\n------------------------------------------");
  console.log(
    "Nome: " + nomes[i] + " Idade: " + idade[i] + " Nota: " + notas[i],
  );
  console.log("------------------------------------------");
}

var soma = function (idade) {
  let cont = 0;
  while (cont < idade.length) {
    console.log(idade[cont] + 10);
    cont++;
  }
};

soma(idade);

let mult = (notas) => {
  for (let i in notas) {
    console.log((notas[mult] * 2) / 5);
  }
};

mult(notas);


// crie uma arrow function que imprima o dobro do número
// crie uma função anonima que verifique se o número é par
console.log("---------------------------==========-------------------------------")

var numero = 8;

numPar = num => {
    if(num%2 == 0){
        console.log("O número é Par!")
    } else{
        console.log("O número é Ímpar!")
    }
};

numPar(numero)

console.log("---------------------------==========-------------------------------")
