const express = require('express');
const Router = express.Router();

/*Exercício 8*/
Router.get('/exerc8', function (request, response) {
    response.render('exerc8', {
        tituloPagina: 'Exercício Número 8'
    });
});

Router.post('/exerc8', function (request, response) {
    let dados = {
        salario: request.body.salario_fixo,
        total_vendas: request.body.valor_venda,
    };
    const erro = false;

    if ((!dados.salario)||(!dados.total_vendas)) {
        return response.render('exerc8', {
            erro: true,
            mensagemErro: 'Por favor digite um dos campos!!',
        });
    } 
    
    var salario_convertido = parseFloat(dados.salario);
    var valor_venda_convertida = parseFloat(dados.total_vendas);
    var salario_comissao_1500 = 0
    var salario_final = 0;
    var diferenca = 0;
    
    if(valor_venda_convertida > 1500){
        salario_comissao_1500 = salario_convertido + (1500* 0.03);
        diferenca = valor_venda_convertida - 1500;
        salario_final = salario_comissao_1500 + (diferenca * 0.05);
    }else{
        salario_final = salario_convertido + (valor_venda_convertida * 0.03);
    }
    
    response.render('exerc8',{salario_final},erro);

});

module.exports = Router;