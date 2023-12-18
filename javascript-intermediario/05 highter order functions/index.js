const calcularAnoDeNacimento = function (idade, mesDeNacimento, imprimir){
   const mesAtual = 2
   let AnoDeNacimento = 2021 - idade
   if(mesDeNacimento > mesAtual) AnoDeNacimento--
   imprimir(AnoDeNacimento)
}

let imprimirAnoDeNacimento = AnoDeNacimento => {
   console.log('seu ano de nascimento é ' + AnoDeNacimento)
}

calcularAnoDeNacimento(33, 3, imprimirAnoDeNacimento)