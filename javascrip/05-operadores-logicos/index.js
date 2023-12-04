/*
   == ------- igual ------- a == b ------- verdadeiro se for a for igual a b 
   === ------- identico ------- a === b -------verdadeiro se a identico b
   != ------- diferente ------- a != b------ verdadeiro se a diferente b
   !== ------- não identico ------- a !== b ------verdadeiro se a  não for identico 
   < ------ menor que ------ a < b ------ verdadeiro se a for menor que b
   <= ------ menor igual que ------ a <= b------ verdadeiro se a for menor ou igual a b 
   < ------ maior que ------ a > b ------ verdadeiro se a for maior que b
   >= ------ maior igual que ------ a >= b------ verdadeiro se a for maior ou igual a b 
   
*/

// const a = 10
// const b = "3"

// console.log(a >= b)

// E &&

const a = 2
const b = 2

console.log(a === b && a <= b)
// v e v = v

console.log(a === b && a < b)
// v e f = f

console.log(a > b && a === b)
//  f e v = f

console.log(a > b && a < b)
// f e f = f


// OR ||

console.log(a === b || a <= b)
// v ou v = v

console.log(a === b || a < b)
// v ou f = v

console.log(a > b || a === b)
// f ou v = v

console.log(a > b || a < b)
// f ou f = f


// not !

console.log(!(a === b))
// false

console.log(!(a < b))
// true
