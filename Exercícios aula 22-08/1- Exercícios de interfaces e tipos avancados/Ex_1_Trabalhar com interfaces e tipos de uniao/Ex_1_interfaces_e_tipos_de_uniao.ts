// Interface para representar as propriedades de um produto
interface Produto {
  nome: string;    // Nome do produto
  preco: number;   // Preço do produto em formato numérico
  categoria: string; // Categoria a qual o produto pertence
}

// Definição do tipo para os métodos de pagamento aceitos
type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

// Função que formata as informações de um produto junto com a forma de pagamento escolhida
function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
  // Gera e retorna uma string com os detalhes do produto e do pagamento
  return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
}

// Instância de um produto para exemplificar o uso
const produtoExemplo: Produto = { nome: 'Ventilador', preco: 150, categoria: 'Eletrodomésticos' };

// Forma de pagamento escolhida
const formaPagamentoExemplo: FormaPagamento = 'pix';

// Exibe no console os detalhes do produto e o método de pagamento
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));
