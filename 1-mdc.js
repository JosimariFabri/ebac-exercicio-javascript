// Calcule o MDC (máximo divisor comum) entre dois números.

function calcularMDC(valor1, valor2) {
    while (valor2 !== 0) {
        let temp = valor2;
        valor2 = valor1 % valor2;
        valor1 = temp;
    }
    return valor1;
}

var mdc = calcularMDC(12, 27);
console.log(mdc)
