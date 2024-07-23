function greet(name: string){
   console.log(`ola ${name}`);
   
}

greet("dd")

// O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'
greet(22)

function doubleNumber(n: number): number {
   let res = n*2
   console.log(res);
}

doubleNumber(22)