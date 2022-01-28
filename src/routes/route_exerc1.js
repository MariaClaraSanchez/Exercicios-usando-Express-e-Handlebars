const express = require('express');
const Router = express.Router();

/*Exercício 1 */
Router.get('/exerc1', function (request, response) {
    response.render('exerc1', {
        tituloPagina: 'Exercício Número 1'
    });
});

Router.post('/exerc1', function (request, response) {
    const { numero } = request.body;
    const erro = false;

    if (!numero) {
        return response.render('exerc1', {
            erro: true,
            mensagemErro: 'Por favor digite algum número pois é um campo obrigatório!!',
        });
    }
    if (numero >0){
        response.render('exerc1', { tipo: 'POSITIVO' }, erro);
    }
    else if (numero <0){
        response.render('exerc1', { tipo: 'NEGATIVO' }, erro);
    }
    else{
        response.render('exerc1', { tipo: 'IGUAL A ZERO' }, erro);
    }
});

module.exports = Router;