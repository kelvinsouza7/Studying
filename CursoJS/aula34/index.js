//52 For - Clássico - Estrutura de Repetição

//console.log('Linha 0');
//console.log('Linha 1');
//console.log('Linha 2');
//console.log('Linha 3');
//console.log('Linha 4');
//console.log('Linha 5');

//i= index
for(let i = 0; i <= 5; i++) {
    console.log(i);
}
//[Running]
//0
//1
//2
//3
//4
//5

for(let i = 0; i <= 5; i++) {
    console.log('Linha ${i}');
}
//[Running]
//Linha 0
//Linha 1
//Linha 2
//Linha 3
//Linha 4
//Linha 5

//De 10 em 10
for(let i = 400; i <= 500; i+= 10) {
    console.log('Linha ${i}');
}
//[Running]
//Linha 400
//Linha 410
//Linha 420
//Linha 430
//Linha 440
//Linha 450
//Linha 460
//Linha 470
//Linha 480
//Linha 490
//Linha 500

//Reduzindo
for(let i = 500; i >= 400; i-= 10) {
    console.log('Linha ${i}');
}
//[Running]
//Linha 500
//Linha 490
//Linha 480
//Linha 470
//Linha 460
//Linha 450
//Linha 440
//Linha 430
//Linha 420
//Linha 410
//Linha 400

//Para números pares
for(let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    console.log(i, par);
}
//[Running]
//0 true
//1 false
//2 true
//3 false
//4 true
//5 false
//6 true
//7 false
//8 true
//9 false
//10 true

//Para números pares
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par : 'impar';
    console.log(i, par);
}
//[Running]
//0 par
//1 impar
//2 par
//3 impar
//4 par
//5 impar
//6 par
//7 impar
//8 par
//9 impar
//10 par