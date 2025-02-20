//Let tem escopo de bloco {...Bloco}
//Var só tem escopo de função
const verdadeira = true;

let nome = 'Luiz'; //Nunca pode ser redeclarado durante o codigo
var nome2 = 'Luiz'; //Pode ser redeclarado

var nome2 = 'Otavio'; 

if (verdadeira) {
    let nome = 'Otavio';
    //console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outr coisa';
        console.log(nome, nome2);
    }
}
