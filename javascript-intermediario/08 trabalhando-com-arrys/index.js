let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length

// primeira forma de fazer
// for(let i = 0; i < frutasTamanho; i++){
//    console.log('frutas: ' + frutas[i])
// }


// segunda form de fazer
// frutas.forEach(function(item){
//    console.log('frutas: ' + item)
// })

// Adiciona um elemento no final do array
// frutas.push('manga')

// Adiciona um elemento no inicio do array
// frutas.unshift('morango')

// retira o ultimo elemento do array
// frutas.pop()

// retira o primeiro elemento do array
// frutas.shift()

// console.log(frutas)

// busca a posição do elemento dentro do array
console.log(frutas.indexOf('laranja')) //2