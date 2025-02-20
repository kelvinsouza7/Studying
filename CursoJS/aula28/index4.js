function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAEsquerda (getDate());
    const mes = zeroAEsquerda (getMonth() + 1);
    const ano = zeroAEsquerda (getFullYear());
    const hora = zeroAEsquerda (getHours ());
    const min = zeroAEsquerda (getMinutes());
    const seg = zeroAEsquerda (getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

//[Running]
// 07/10/2019 15:49:07


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

