// function(a,b, ...args){
//    ...
// }

function incentivarQuester(mensagem, ...nomesQuesters){
   nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('parabens por ter chegado até aqui', 'Mariana', 'pedro', 'rafael')