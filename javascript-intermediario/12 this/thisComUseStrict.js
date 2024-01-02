'use strict'
// console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'mariana'
// function saudar(){
//    console.log("this no contexto da funcao", this)
//    console.log("Ola, " + this.name)
// }

// saudar()

// let usuario = {
//    nome: 'mariana',
//    saudar : function(){ 
//       console.log("this no contexto da metodo"),
//       console.log('this.nome no contexto do metodo,', this.nome)
//    }
// }
// usuario.saudar()

let comida = {
   nome:'brocolis',
   temperatura:0
}

comida.cozinhar = function(temperaturaDeCozimento){
   this.temperatura = temperaturaDeCozimento;
}

console.log(comida)
comida.cozinhar(100)
console.log(comida)