const pessoa = {
    nome: 'Luiz',
    sobrenome 'Miranda',
    idade: 30, 
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação -> Nome
const { nome, sobrenome, idade  } = pessoa;
console.log(nome);
//[Running]
// Luiz Miranda 30


//Atribuição via desestruturação -> Nome
const { nome: teste = '', sobrenome } = pessoa;
console.log(teste, sobrenome);
//[Running]
// Luiz Miranda

//Atribuição via desestruturação -> Endereço
const { nome, sobrenome, endereco } = pessoa;
console.log(endereco);
//[Running]
// {rua: 'Av Brasil', numero: 320}

//Atribuição via desestruturação -> Endereço
const { endereco: {rua, numero } } = pessoa;
console.log(rua, numero);
//[Running]
// {Av Brasil 320}