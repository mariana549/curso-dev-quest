const calcularValorPedido = require('./calcular-valores-pedidos.js');

it('não deve cobra valor de frete quando valor dos produtos for superior a 500', () => {
   // AAA - 3 passos de criação de um test

   // ARRANG - ARRUMAR
   const meuPedido = {
      itens : [
         {nome: 'arco encantado', valor: 2000},
         {nome: 'entrega', valor: 100, entrega: true}
      ]
   }

   //ACT - AÇÃO
   const resultado = calcularValorPedido(meuPedido)

   // ASSERT - ASSERÇÃO - QUAL O RESULTADO ESPERADO
   expect(resultado).toBe(2000)
})

it ('deve cobrar valor de frete quando valor dos produtos for menor que 500', () => {
   const meuPedido = {
      itens : [
         {nome: 'sanduiche', valor: 50},
         {nome: 'entrega', valor: 100, entrega: true}
      ]
   }

   const reusultado = calcularValorPedido(meuPedido)

   expect(reusultado).toBe(150)
})

