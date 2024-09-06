// Importação do namespace Financeiro
import { Financeiro } from './Financeiro';

// Criação de instâncias e utilização das funções do namespace
const orcamentoExemplo = new Financeiro.Orcamento(7500, ['PC - Gamer', 'Monitor']);
console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(7500, 0.15);
console.log(`Valor do Imposto: R$${valorComImposto.toFixed(2)}`);

const valorComDesconto = Financeiro.calcularDesconto(7500, 0.10);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);