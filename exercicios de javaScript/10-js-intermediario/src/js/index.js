let buttonVoltarPagina = document.querySelector('.esquerdaSeta');
let buttonProximaPagina = document.querySelector('.direitaSeta');

let primeiraDescricao = document.querySelector('.primeiro')
let segundaDescricao = document.querySelector('.segundo')
let terceiraDescricao = document.querySelector('.terceiro')
let quaartaDescricao = document.querySelector('.quarta')

let paginas = [primeiraDescricao, segundaDescricao, terceiraDescricao, quaartaDescricao];

let index = 0;

if (paginas[index].classList.contains("none")) {
   paginas[index].classList.remove('none');
}
for (let i = 1; i < paginas.length; i++){
   paginas[i].classList.add('none');
}

buttonProximaPagina.addEventListener('click', ()=> {
   paginas[index].classList.add('none');
   index++;

   if (index >= paginas.length){
      index = 0;
   }

   paginas[index].classList.remove('none')

   buttonAtualizar()
});

buttonVoltarPagina.addEventListener('click', ()=> {
   paginas[index].classList.add('none');
   index--;

   if (index < 0){
      index = paginas.length - 1;
   }

   paginas[index].classList.remove('none');
   
   buttonAtualizar()
});

function buttonAtualizar (){
   if (index == 0) {
      buttonVoltarPagina.classList.add('desativado')
   } else if (index == paginas.length - 1) {
      buttonProximaPagina.classList.add('desativado')
   } else {
      buttonVoltarPagina.classList.remove('desativado');
      buttonProximaPagina.classList.remove('desativado');
   }
}
buttonAtualizar()


