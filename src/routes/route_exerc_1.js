const express = require('express');
const Router = express.Router();
const bodyParse = require('body-parser');

/*Exercício 1 */
Router.get('/exerc1',function (request,response) {
    response.render('exerc1',{
        tituloPagina:  'Exercício Número 1'
    });
});

Router.post('/exerc1',function (request,response) {

    let valor = request.body.valor;
    console.log(request.body.valor);
    return response.render('exerc1',valor);
});

module.exports = Router;