/*2) Construa uma função chamada “distancia” que, tendo como entrada dois 
pontos quaisquer no plano, P1(x1, y1) e P2(x2,y2), escreva a distância 
entre eles.*/

function distancia(x1, y1, x2, y2) {
  let parteX = (x2 - x1) * (x2 - x1);
  let parteY = (y2 - y1) * (y2 - y1);
  let d = Math.sqrt(parteX + parteY);

  console.log("Distância:", d);
  return d;
}

distancia(1, 2, 4, 6);
