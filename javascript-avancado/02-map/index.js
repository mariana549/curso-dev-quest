let pessoas = [
   {nome: 'mariana', idade: 20},
   {nome: 'roberto', idade: 20},
   {nome: 'miriam', idade: 26}
]

//-------------------- primeiro jeito -------------------

// let nomeDasPessoas = []
// for(let i = 0; i < pessoas.length; i++){
//    nomeDasPessoas.push(pessoas[i].nome)
// }
// console.log(nomeDasPessoas)

//-------------------- segundo jeito -------------------

let nomeDasPessoas = pessoas.map((pessoas) => pessoas.nome + ' têm ' + pessoas.idade + 'anos')
console.log(nomeDasPessoas)
