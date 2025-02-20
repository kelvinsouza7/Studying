const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2= 10.52 //number
let nomeAluno; //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; //Nulo -> não aponta para local nenhum na memória 
/*
const boolean = false;
const boolean = true; // Boolean = true, false (lógico)
*/
//const aprovado = true;
const aprovado = false;

console.log(typeof nomeAluno, nomeAluno );

/*
const a = [ 1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);
*/

let a = 2;
let b = a; 
console.log(a, b); // 2, 2 

a = 3; 
console.log(a, b); //3, 2
