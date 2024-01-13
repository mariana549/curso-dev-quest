const perguntasAparecerSumir = () => {
   let resposta = [...document.querySelectorAll('.resposta')];
   secao = document.getElementsByClassName('secao');
   
   let resposta1 = resposta[0];
   let resposta2 = resposta[1];
   let resposta3 = resposta[2];
   let secao1 = secao[0];
   let secao2 = secao[1];
   let secao3 = secao[2];

   secao1.onclick = function () {
      resposta1.classList.toggle('sumir')
      trocarSetas(0) 
   }

   secao2.onclick = function () {
      resposta2.classList.toggle('sumir')
      trocarSetas(1) 
   }

   secao3.onclick = function () {
      resposta3.classList.toggle('sumir')
      trocarSetas(2)
   }

   const trocarSetas = (i) => {
      let setas = document.querySelectorAll(".setas")
      let seta = setas[i]; 
      
      seta.onclick = function () {
         seta.classList.toggle('seta-fechada')
         seta.classList.toggle('seta-aberta')
         perguntasAparecerSumir()
      }

      seta.classList.toggle('seta-fechada')
      seta.classList.toggle('seta-aberta')
   }
   trocarSetas()
}
perguntasAparecerSumir()

