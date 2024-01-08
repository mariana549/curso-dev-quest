let quadrado = document.querySelector('.quadrado');

quadrado.addEventListener('click', () => {
 const classeAzulExeiste = quadrado.classList.contains('blue');

 if (classeAzulExeiste) {
   quadrado.classList.remove('blue');
 } else {
   quadrado.classList.add('blue');
 }
})
