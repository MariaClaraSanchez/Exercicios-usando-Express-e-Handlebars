const express = require('express');
const Router = express.Router();

/*Exercício 4 */
Router.get('/exerc4', function (request, response) {
    response.render('exerc4', {
        tituloPagina: 'Exercício Número 4'
    });
});

Router.post('/exerc4', function (request, response) {
    const {custoFabrica} = request.body; 
    const erro = false;

    if (!custoFabrica) {
        return response.render('exerc4', {
            erro: true,
            mensagemErro: 'Por favor digite o custo!!',
        });
    } 
    
    const custoConvertido = parseFloat(custoFabrica);
    const distribuidor = (28 * custoConvertido) / 100;
    const imposto = (45 * custoConvertido) / 100;
    const custo_total = custoConvertido + distribuidor + imposto;
    response.render('exerc4',{custo_total}, erro);
});

module.exports = Router;