"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação do namespace Financeiro
var Financeiro_1 = require("./Financeiro");
// Criação de instâncias e utilização das funções do namespace
var orcamentoExemplo = new Financeiro_1.Financeiro.Orcamento(7500, ['PC - Gamer', 'Monitor']);
console.log(orcamentoExemplo.exibirOrcamento());
var valorComImposto = Financeiro_1.Financeiro.calcularImposto(7500, 0.15);
console.log("Valor do Imposto: R$".concat(valorComImposto.toFixed(2)));
var valorComDesconto = Financeiro_1.Financeiro.calcularDesconto(7500, 0.10);
console.log("Valor com Desconto: R$".concat(valorComDesconto.toFixed(2)));
