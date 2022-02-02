const express = require('express');
const Router = express.Router();

/*Exercício 3 */
Router.get('/exerc3', function (request, response) {
    response.render('exerc3', {
        tituloPagina: 'Exercício Número 3'
    });
});

Router.post('/exerc3', function (request, response) {
    let dados = {
        altura: request.body.altura,
        peso: request.body.peso
    };
    const erro = false;

    if ((!dados.altura) || (!dados.peso)) {
        return response.render('exerc3', {
            erro: true,
            mensagemErro: 'Por favor digite um dos campos!!',
        });
    }
    let IMC = dados.peso / Math.pow(dados.altura, 2);
    IMC = Math.round(IMC * 100) / 100;
    response.render('exerc3', { IMC }, erro);

});
module.exports = Router;