let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const numeros = [1, 2, 3];
[a, b, c] = numeros;


console.log. (a, b, c);


//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log (numeros [1][2]);

//[Running]
//6

// ou...:
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = numeros;
console.log(seis);
//[Running]
//6
