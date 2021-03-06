describe("Suíte de testes de divisão", function() {

    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 2 para 6 e 3', function() {
        expect(Calculadora.dividir(6, 3)).toEqual(2);
    });
    it('deve retornar 5 para 8 e 3 no formato texto', function() {
        expect(Calculadora.dividir('6', '3')).toEqual(2);
    });
    it('deve retornar 1.5 para 4.5 e 3', function() {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
        expect(Calculadora.dividir('4.5', '3')).toEqual(1.5);
    });
    it('deve retornar "Erro" para divisão por 0', function() {
        expect(Calculadora.dividir(5, 0)).toEqual('Erro');
    });
    it('deve retornar 0 quando o valor 1 não for numérico', function() {
        expect(Calculadora.dividir(undefined, 5)).toEqual(0);
    });
    it('deve retornar 0 quando o valor 2 não for numérico', function() {
        expect(Calculadora.dividir(5, undefined)).toEqual(0);
    });
})