// Definição do tipo Pessoa, representando um indivíduo com nome e idade
type Pessoa = {
  nome: string;    // Nome da pessoa
  idade: number;   // Idade da pessoa
};

// Definição do tipo Empregado, representando dados relacionados ao emprego
type Empregado = {
  empresa: string; // Nome da empresa onde trabalha
  salario: number; // Valor do salário do empregado
};

// Combinação de Pessoa e Empregado usando interseção de tipos
type PessoaEmpregada = Pessoa & Empregado;

// Função que exibe informações detalhadas sobre um empregado
function exibirInformacoesEmpregado(empregado: PessoaEmpregada): string {
  // Retorna uma string formatada com os dados da pessoa e do emprego
  return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}

// Exemplo prático de uma pessoa empregada com nome, idade, empresa e salário
const pessoaEmpregadaExemplo: PessoaEmpregada = { nome: 'Victor', idade: 20, empresa: 'Yamaha', salario: 15000 };

// Exibe no console as informações da pessoa empregada
console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));
