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

it ('deve cobrar valor de frete quando valor dos produtos for exatamente 500', () => {
   const meuPedido = {
      itens : [
         {nome: 'sanduiche de rico', valor: 500},
         {nome: 'entrega', valor: 100, entrega: true}
      ]
   }

   const reusultado = calcularValorPedido(meuPedido)

   expect(reusultado).toBe(600)
})

// caso os estados sejam RS ou SC, deve ser acresentado um valor de 20% na entrega 
it("deve adicionar um acrecimo de 20% da entrega do pedido caso o estado seja RS", () => {
   const pedidoComEstadoRS = {
      estado: 'RS',
      itens : [
         {nome: 'sanduiche de rico', valor: 500},
         {nome: 'entrega', valor: 100, entrega: true}
      ]
   }

   const resultado = calcularValorPedido(pedidoComEstadoRS)

   expect(resultado).toBe(620)
})

it("deve adicionar um acrecimo de 20% da entrega do pedido caso o estado seja SC", () => {
   const pedidoComEstadoSC = {
      estado: 'SC',
      itens : [
         {nome: 'sanduiche de rico', valor: 500},
         {nome: 'entrega', valor: 100, entrega: true}
      ]
   }

   const resultado = calcularValorPedido(pedidoComEstadoSC)

   expect(resultado).toBe(620)
})

it("não deve adicionar um acrecimo de 20% da entrega do pedido caso o estado seja SP", () => {
   const pedidoComEstadoSP = {
      estado: 'SP',
      itens : [
         {nome: 'sanduiche de rico', valor: 500},
         {nome: 'entrega', valor: 100, entrega: true}
      ]
   }

   const resultado = calcularValorPedido(pedidoComEstadoSP)

   expect(resultado).toBe(600)
})