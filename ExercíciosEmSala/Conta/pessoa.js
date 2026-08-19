export class Pessoa {
  constructor(nome, idade, telefone) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
  }
  verificarIdade(idade) {
    if (idade < 18) {
      console.log(this.nome + "Você é de menor! Não pode abrir a conta");
    }
    return true;
  }
}
