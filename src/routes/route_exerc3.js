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
    console.log(dados.altura);
    console.log(dados.peso);

    if ((!dados.altura)|| (!dados.peso)) {
        return response.render('exerc3', {
            erro: true,
            mensagemErro: 'Por favor digite um dos campos!!',
        });
    } 

    const alturaConvertida = parseFloat(dados.altura);
    const pesoConvertido = parseFloat(dados.peso);

    let IMC = pesoConvertido/Math.pow(alturaConvertida,2);

    IMC = Math.round(IMC * 100)/100;

    console.log(IMC);

    response.render('exerc3',{IMC}, erro);

});

module.exports = Router;