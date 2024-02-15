const calcularValorPedido = pedido => {
   const valorProdutos = pedido.itens
   .filter(item => !item.entrega)
   .reduce((totalpedidos, pedidoAtual) => totalpedidos + pedidoAtual.valor, 0)

   const entrega = pedido.itens.filter(item => item.entrega);

   if (pedido.estado === 'RS'){
      const acrecimoEntrega = entrega[0].valor * 0.2;
      entrega[0].valor += acrecimoEntrega;
   }

   return (valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor;
}

module.exports = calcularValorPedido

