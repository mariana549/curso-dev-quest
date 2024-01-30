function colocarAguaParaFever() {
   console.log('colocar Agua Para Fever')
   setTimeout(() => {
      console.log('agua ferveu')
      passarOCafe()
   }, 5000);
}

function prepararParaPassarOCafe(){
   console.log('pegar o po de cafe')
   console.log('pegar o filtro')
   console.log('colocar o cafe no filtro')
   console.log('colocar o filtro na xicara')
}

function passarOCafe(){
   console.log('passando o cafe')
}

colocarAguaParaFever()
prepararParaPassarOCafe()
