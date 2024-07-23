const stringNumber: [string, number] = ["roberto", 1]

// O tipo 'number' não pode ser atribuído ao tipo 'string'.
const stringNumber2: [string, number] = [1]

// O tipo 'string' não pode ser atribuído ao tipo 'number'.
const stringNumber3: [string, number] = [ 1, "roberto"]

// O tipo '[string]' não pode ser atribuído ao tipo '[string, number]'.
//   A origem tem 1 elementos, mas o destino exige 2.
const stringNumber4: [string, number] = ["1"]

// let bgColor: [number, number, number, (number | undefined)?]
let bgColor: [number, number, number, number?] ;
bgColor = [0, 255, 255]


// O tipo '[number, number, number]' não pode ser atribuído ao tipo '[number, number, number, number]'.
//   A origem tem 3 elementos, mas o destino exige 4.
let bgColor2: [number, number, number, number] ;
bgColor2 = [0, 255, 255]