var { maiorInd, menorInd, sequenciaNum } = require('./2-indice')

describe('Funções matemáticas', () => {
    
    it('Validar o índice de maior e menor valor', () => {
        expect(maiorInd = Math.max.apply(null, sequenciaNum ))
        expect(menorInd = Math.min.apply(null, sequenciaNum ))
    });
});