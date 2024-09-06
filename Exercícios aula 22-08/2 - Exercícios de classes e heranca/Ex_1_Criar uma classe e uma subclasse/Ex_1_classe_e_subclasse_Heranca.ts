// Classe Funcionario para representar um empregado comum
class Funcionario {
  // O construtor inicializa o nome, cargo e salário do funcionário
  constructor(public nome: string, public cargo: string, public salario: number) {}

  // Método que retorna uma descrição básica do funcionário
  descricao(): string {
    return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
  }
}

// Subclasse Gerente que herda da classe Funcionario
class Gerente extends Funcionario {
  // O construtor inclui um campo adicional para o departamento, além dos atributos de Funcionario
  constructor(nome: string, cargo: string, salario: number, public departamento: string) {
    super(nome, cargo, salario);  // Chama o construtor da classe pai
  }

  // Método que retorna uma descrição detalhada, incluindo o departamento
  descricaoDetalhada(): string {
    return `${super.descricao()}, Departamento: ${this.departamento}`;  // Chama o método da classe pai
  }
}

// Instancia um objeto da classe Gerente e o exibe
const gerenteExemplo = new Gerente('Victor', 'Estagiário de Projeção comercial', 15000, 'Business Inteligence');
console.log(gerenteExemplo.descricaoDetalhada());
