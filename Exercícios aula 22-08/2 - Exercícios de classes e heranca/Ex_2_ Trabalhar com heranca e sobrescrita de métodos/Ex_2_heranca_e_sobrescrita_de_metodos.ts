// Classe ContaBancaria que define uma conta com titular e saldo
class ContaBancaria {
  // Construtor que inicializa o titular e o saldo da conta
  constructor(public titular: string, public saldo: number) {}

  // Método que retorna uma string com o saldo da conta
  exibirSaldo(): string {
    return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
  }
}

// Subclasse ContaCorrente que extende ContaBancaria e adiciona limite de crédito
class ContaCorrente extends ContaBancaria {
  // Construtor que adiciona o limite de crédito e usa o construtor da superclasse
  constructor(titular: string, saldo: number, public limiteCredito: number) {
    super(titular, saldo);
  }

  // Sobrescreve o método exibirSaldo para incluir o limite de crédito
  exibirSaldo(): string {
    const saldoTotal = this.saldo + this.limiteCredito;
    return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
  }
}

// Instância de uma ContaCorrente e exibe o saldo total
const contaCorrenteExemplo = new ContaCorrente('Victor', 40000, 2500);
console.log(contaCorrenteExemplo.exibirSaldo());
