import { Conta } from "./conta.js";
import { Pessoa } from "./pessoa.js";

let p1 = new Pessoa("Chaves", 16, "5555558-5555");
let p2 = new Pessoa("Seu Madruga", 48, "8989899-8989");

let c1 = new Conta(p1);
let c2 = new Conta(p2);

c1.depositar(2);
c2.depositar(5000);

c2.transferir(c1, 1600);

console.log("Titular: " + c1.pessoa.nome + " - Saldo R$ " + c1.saldo);
console.log("Titular: " + c2.pessoa.nome + " - Saldo R$ " + c2.saldo);
