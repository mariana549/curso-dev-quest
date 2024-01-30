let pessoas = [
   {nome: 'mariana', idade: 20},
   {nome: 'roberto', idade: 20},
   {nome: 'miriam', idade: 26}
]

//-------------------- primeiro jeito de filtrar -------------------

// let pessoasComIdadeDe20Anos = []
// for(let i = 0; i < pessoas.length; i++){
//    if(pessoas[i].idade === 20){
//       pessoasComIdadeDe20Anos.push(pessoas[i]);
//    }
// }
// console.log(pessoasComIdadeDe20Anos)


//-------------------- segundo jeito de filtrar -------------------

let pessoasComIdadeDe20Anos = pessoas.filter((pessoa)=> pessoa.idade === 20)
console.log(pessoasComIdadeDe20Anos)
