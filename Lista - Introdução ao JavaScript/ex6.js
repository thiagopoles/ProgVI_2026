/*6) Faça uma função que receba o tempo de duração de um evento em 
segundos e mostre-o expresso em horas, minutos e segundos. Use um 
array para retornar o horário.*/

function converterTempo(tempoSegundos) {
  let horas = Math.floor(tempoSegundos / 3600);
  let resto = tempoSegundos % 3600;
  let minutos = Math.floor(resto / 60);
  let segundos = resto % 60;

  console.log("Tempo:", horas + "h", minutos + "m", segundos + "s");
  return [horas, minutos, segundos];
}

converterTempo(3730);
