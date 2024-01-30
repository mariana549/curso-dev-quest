let pessoas = {nome: 'mariana',sobrenome: "antonia", idade: 20}
// let nome = pessoas.nome 
// let idade = pessoas.idade

// console.log(nome, idade)

// ------- destruturação --------

let { nome, idade, sobrenome} = pessoas
// console.log(nome, idade, sobrenome)

// ______________________________________________________

const numeros = [1,2,3]
const [um, dois, tres] = numeros 
console.log(um, dois, tres)
