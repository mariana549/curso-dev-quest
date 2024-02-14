const meuPedido = {
   itens : [
      {nome: 'poção de vida', valor: 100},
      {nome: 'Espada de prata', valor: 1000}
   ]
}
const calcularValorPedido = pedido => 
pedido.itens.reduce((totalpedidos, pedidoAtual) => totalpedidos + pedidoAtual.valor, 0)