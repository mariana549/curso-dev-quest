// Função genérica que aceita um argumento do tipo T 
// e retorna um array de valores do mesmo tipo T
function makeArray<t>(num: t): t[] {
   return [num];
}

// Uso da função com tipo number
let numbers = makeArray(10);
console.log(numbers); // Output: [10]

//numbers.filter(n => n % 2)