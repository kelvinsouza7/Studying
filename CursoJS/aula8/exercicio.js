/* 
Kelvin Silvanir Souza tem 24 anos, pesa 75Kg tem 1.80 tem 1,80 de altura, seu IMC é de 25.92
Kelvin Nasceu em 1999
*/

const nome = 'Kelvin Silvanir';
const sobrenome = 'Souza';
const idade = 24;
const peso = 75;
const alturaEmM = 1.81;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);

anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log("tem", alturaEmM, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento,'.');
console.log();

console.log(nome + ' ' + sobrenome + 'tem' + idade + 'anos, pesa' + peso + 'kg');
console.log("tem", alturaEmM, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento,'.');
console.log();

// template strings - Melhor forma de escrever 
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);