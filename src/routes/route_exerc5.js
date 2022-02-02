const express = require('express');
const Router = express.Router();

/*Exercício 5*/
Router.get('/exerc5', function (request, response) {
    response.render('exerc5', {
        tituloPagina: 'Exercício Número 5'
    });
});

Router.post('/exerc5', function (request, response) {
    let dados = {
        salario: request.body.salario,
        reajuste: request.body.reajuste
    };

    const erro = false;

    if ((!dados.salario) || (!dados.reajuste)) {
        return response.render('exerc5', {
            erro: true,
            mensagemErro: 'Por favor digite um dos campos!!',
        });
    }

    var salarioConvertido = parseFloat(dados.salario);
    var reajusteConvertido = parseFloat(dados.reajuste);
    salarioConvertido += (salarioConvertido * (reajusteConvertido / 100));

    response.render('exerc5', { salarioConvertido }, erro);

});
module.exports = Router;
