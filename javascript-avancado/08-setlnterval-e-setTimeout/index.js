// setTimeout(() => {
//    alert("ola voce")
// }, 2000);

// setTimeout(() => {
//    console.log('dento do setTimeout')
// }, 4000);
// console.log("depois do settimeout")

// setInterval(() => {
//    console.log('executando')
// }, 4000);
// console.log("depois")
const idIntervalo = setInterval(() => {
                     console.log('executando a cada 2 segundos')
                  }, 2000)
console.log(idIntervalo)
clearInterval(idIntervalo)