const express = require('express');
const Router = express.Router();

/*Exercício 2 */
Router.get('/exerc2', function (request, response) {
    response.render('exerc2', {
        tituloPagina: 'Exercício Número 2'
    });
});

Router.post('/exerc2', function (request, response) {
    const {numero} =  request.body;
    const erro = false;
    const tabuada = [];

    if (!numero) {
        return response.render('exerc2', {
            tabuada:[],
            erro: true,
            mensagemErro: 'Por favor digite algum número pois é um campo obrigatório!!',
        });
    }

    for (let i = 0; i <= 10; i++) {
        tabuada.push(`${numero} X ${i} = ${i*numero}`); 
        //tabuada[i] = `${dado.numero} X ${i} = ${i*dado.numero}`;
        //console.log(`${i} * ${numeroConvertido}  = ${tabuada[i]}`);
    }
    return response.render('exerc2',{tabuada},erro);
});

module.exports = Router;