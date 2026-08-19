/* Dados o carrinho abaixo, use a função filter para listar apenas os produtos que custam menos de R$ 5,00 reais. */
let carrinho = [
  { produto: "Coxinha", preço: 6.5 },
  { produto: "Suco", preço: 4 },
  { produto: "Chocolate", preço: 3.5 },
  { produto: "Combo Lanche", preço: 12 },
];

let carrinhoFiltrar = carrinho.filter(function (elem) {
  return elem.preco < 5;
});

carrinhoFiltrar.map((elem) =>
  console.log("Produto: " + elem.produto + "Valor: R$ " + elem.preco),
);
