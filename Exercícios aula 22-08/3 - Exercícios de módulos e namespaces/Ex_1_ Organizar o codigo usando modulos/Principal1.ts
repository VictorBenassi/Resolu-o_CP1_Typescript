// Importação da classe Pedido
import { Pedido } from './Pedido';
import { Cliente } from './Cliente';

// Criação de instâncias de Pedido e Cliente
const clienteExemplo = new Cliente('Victor', 'victor@ig.com.br');
const pedidoExemplo = new Pedido(clienteExemplo, 'Smartphone', 1800);

console.log(pedidoExemplo.exibirPedido());