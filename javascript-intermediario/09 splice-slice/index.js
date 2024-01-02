let frutas = ['banana', 'maçã', 'laranja', 'uva']

// frutas que vao se copiadas
// let frutasExtrasidas = frutas.slice(2)

// console.log(frutasExtrasidas)
console.log(frutas)

// let frutasExtrasidas = frutas.splice(1, 2)
// frutas que vão se retiradas

// console.log(frutasExtrasidas)

// arry sem as frutas que foram retiradas
// console.log(frutas)

let removeEAdiciona = frutas.splice(1,2, 'goibaba', 'abacaxi', 'pera');

console.log(frutas)
console.log(removeEAdiciona)