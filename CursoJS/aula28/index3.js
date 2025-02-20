const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // Domingo = 0, Sábado = 6
console.log(data.toString());
console.log(Date.now()); //Retorna os milisegundos de agora

//Sat Apr 20 2019 20:20:59 GMT -0300 (GMT-03:00)

//Dia 20
//Mês 4
//Ano 2019
//Hora 20
//Min 15
//Seg 59
//ms 100
//Dia semana 6 
// Sat Apr 20 2019 20:15:59 GMT -0300 (GMT-03:00)
