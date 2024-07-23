type Costumer = {
   name: string;
   age: number;
}

function showCustomerInfor (Customer: Costumer) {
   console.log(`o nome do clinete é: ${Customer.name}`)
   console.log(`o Idade do clinete é: ${Customer.age}`)
}