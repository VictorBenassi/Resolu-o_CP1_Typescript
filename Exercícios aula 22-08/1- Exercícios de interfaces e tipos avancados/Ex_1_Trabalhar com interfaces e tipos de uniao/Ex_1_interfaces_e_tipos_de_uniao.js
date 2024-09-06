// Função que recebe um Produto e uma FormaPagamento
function exibirProdutoComPagamento(produto, pagamento) {
    return "Produto: ".concat(produto.nome, ", Categoria: ").concat(produto.categoria, ", Pre\u00E7o: R$").concat(produto.preco.toFixed(2), ", Forma de Pagamento: ").concat(pagamento, ".");
}
// Exemplo de uso
var produtoExemplo = { nome: 'Ventilador', preco: 150, categoria: 'Eletrodomésticos' };
var formaPagamentoExemplo = 'pix';
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));
