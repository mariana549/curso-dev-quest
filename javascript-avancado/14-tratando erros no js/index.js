let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
   return new Promise((resolve, reject) => {

      if(typeof chaleiraEstaNoFogao != 'boolean') throw 'somente o tipo boolean e aceito'

     if (chaleiraEstaNoFogao && fogaoEstaLigado) {
       resolve(true);
       console.log("Começando o processo de ferver a água");
     } else {
       reject();
       console.log(
         "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água"
       );
     }
   });
 };
 
 let passarCafe = (aguaFervida) => {
   return new Promise(function (resolve) {
     console.log("Passando o café");
     resolve(true);
   });
 };
 
 let tomarCafe = (cafePassado) => {
   return new Promise(function (resolve) {
     console.log("Tomando o café");
     resolve(true);
   });
 };
 
 let lavarXicara = (cafeTomado) => {
   return new Promise(function (resolve) {
     console.log("Lavando a xícara");
     resolve(true);
   });
 };
 
 let chaleiraEstaNoFogao = 'teste';
 let fogaoEstaLigado = true;

 async function iniciarProcessoDeFazerCafe(){
   try {
      const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
      const cafePassado = await passarCafe(aguaFervida);
      const cafeTomado = await tomarCafe(cafePassado);
      const xicaraLavada = await lavarXicara(cafeTomado);

      throw "mensagem de error"
   } catch(err){
      console.log(err)
   }finally {
       console.log("Finalizado o ritual de tomar café")
   }
 }
 iniciarProcessoDeFazerCafe()
 