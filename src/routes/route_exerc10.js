const express = require('express');
const Router = express.Router();

/*Exercício 10*/
Router.get('/exerc10', function (request, response) {
    response.render('exerc10', {
        tituloPagina: 'Exercício Número 10'
    });
});

Router.post('/exerc10', function (request, response) {
    let datas = {
        nascimento: request.body.ano_nascimento,
        ingesso: request.body.ano_ingresso,
    };
    const erro = false;


     if ((!datas.nascimento) || (!datas.ingesso)) {
        return response.render('exerc10', {
            erro: true,
            mensagemErro: 'Por favor digite um dos dados!!',
        });
    }
    const idade_atual = 2022 - datas.nascimento;
    const tempo_servico = 2022 -  datas.ingesso;

    if((idade_atual>=65 || tempo_servico>=30) || ((idade_atual>=60 && tempo_servico>=25))){
        response.render('exerc10', { situacao: 'REQUERER APOSENTADORIA',idade_atual,tempo_servico}, erro);
    }
    else{
        response.render('exerc10', { situacao: 'NÃO REQUERER APOSENTADORIA',idade_atual,tempo_servico }, erro);
    }

    //console.log(idade_atual);
    //console.log(tempo_servico);

    
});

module.exports = Router;