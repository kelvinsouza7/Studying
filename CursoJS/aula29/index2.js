const data = new Date('1987-04-21 00:00:00');
let = diaSemana = data.getDay(); // Domingo = 0, Sábado = 6
let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto = 'Domingo'; 
    break;
case 1:
    diaSemanaTexto = 'Segunda'; 
    break;
case 2:
    diaSemanaTexto = 'Terça'; 
    break;
case 3:
    diaSemanaTexto = 'Quarta'; 
    break;   
case 4:
    diaSemanaTexto = 'Quinta'; 
    break;
case 5:
    diaSemanaTexto = 'Sexta'; 
    break;
case 6:
    diaSemanaTexto = 'Sábado'; 
    break;
default:
    diaSemanaTexto = '';
    break;
}

//[Running]
// 0 'Domingo'



//Sempre lembrar de colocar o Break quando utilizar o Switch/Case, ou entao pode encontrar outro valor que seja falso ou não condizente