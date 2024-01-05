function alterarCorFundoPrimeiroPost(){
   let post = document.getElementsByClassName('post');
   console.log(post);

   let primeiroPost = post[0];
   console.log('primeiroPost',primeiroPost);
   primeiroPost.style.backgroundColor = 'pink';
}

function aumentarFonteSegundoPost(){
   let textPost = document.getElementsByClassName('texto-post');

   textPost[1].classList.add('fonte-grande')
   console.log(textPost[1].classList);
}

function marcarRadio(genero){
   let radioMasculino = document.getElementById('genero-masculino');

   let radioFemenino = document.getElementById('genero-feminino');
   
   if(genero === 'M'){
      radioMasculino.checked = true;
   }else if(genero === 'F'){
      radioFemenino.checked = true;
   }
}