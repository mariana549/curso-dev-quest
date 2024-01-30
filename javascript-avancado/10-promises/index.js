/*
   pendente
   realizada Resolve
   recusada Reject
   establizada
*/

// new Promise((resolve, reject) => {

// })



let feverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
      if(chaleiraEstaNoFogao && fogaoEstaLigado){
         console.log('começando o processo de fever agua')
         resolve()
      } else {
         console.log('e necessario ligar o o  fogao e colocar a chaleira no fogão para a agua fever')
         reject()
      }
   })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false

feverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log("passando o cafe")