// Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.

function indice(numeros) {
    let maiorInd = 0;
    let menorInd = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[maiorInd]) {
            maiorInd = i;
        } else if (numeros[i] < numeros[menorInd]) {
            menorInd = i;
        }
    }
    return {maiorInd, menorInd};
}
const sequenciaNum = [3, 15, 21, 40, 65, 77];
const indices = indice(sequenciaNum);
console.log(`O índice maior é ${indices.maiorInd} e o menor é ${indices.menorInd}.`);
