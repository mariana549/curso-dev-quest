const meuPedido = {
   itens : [
      {nome: 'poção de vida', valor: 100},
      {nome: 'Espada de prata', valor: 1000},
      {nome: 'entrega', valor: 40, entrega: true}
   ]
}
const calcularValorPedido = pedido => {
   const valorProdutos = pedido.itens
   .filter(item => !item.entrega)
   .reduce((totalpedidos, pedidoAtual) => totalpedidos + pedidoAtual.valor, 0)

   const entrega = pedidos.itens.filter(item => item.entrega);

   if (valorProdutos > 500){
      return valorProdutos
   } else {
      return valorProdutos + entrega.valor
   }
}

// pedido.itens.reduce((totalpedidos, pedidoAtual) => totalpedidos + pedidoAtual.valor, 0)

console.log(calcularValorPedido(meuPedido)) //1100