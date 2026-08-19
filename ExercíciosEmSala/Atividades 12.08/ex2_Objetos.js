let carro = {
  cor: "Branco",
  Modelo: "Up",
  potencia: "1.0 Tsi",
  motoristas: ["Chaves", "Seu Madruga"],
  potenciaCombustivel: { gasolina: "130cv", alcool: "135cv" },
};

carro.portas = 4;

console.log("==============================================================");
console.log(
  carro.cor +
    " - " +
    carro.modelo +
    " - " +
    carro.potencia +
    " - " +
    carro.portas +
    " - " +
    carro.motoristas[1] +
    " - " +
    carro.potenciaCombustivel.alcool +
    " - " +
    carro.potenciaCombustivel.gasolina,
);
console.log("==============================================================");
