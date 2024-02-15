const calcularValorPedido = require('./calcular-valores-pedidos.js');

it('não deve cobra valor de frete quando valor dos produtos for superior a 500', () => {
   const meuPedido = {
      itens : [
         {nome: 'arco encantado', valor: 2000},
         {nome: 'entrega', valor: 100, entrega: true}
      ]
   }
   const resultado = calcularValorPedido(meuPedido)
   expect(resultado).toBe(2000)
})