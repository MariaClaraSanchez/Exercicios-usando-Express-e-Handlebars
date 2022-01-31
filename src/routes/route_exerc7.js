const express = require('express');
const Router = express.Router();

/*Exercício 7*/
Router.get('/exerc7', function (request, response) {
    response.render('exerc7', {
        tituloPagina: 'Exercício Número 7'
    });
});

Router.post('/exerc7', function (request, response) {
    let dados = {
        salario_horas: request.body.salario_hora,
        horas_trabalhadas: request.body.numero_horas_trabalhadas,
    };
    const erro = false;

    if ((!dados.salario_horas)||(!dados.horas_trabalhadas)) {
        return response.render('exerc7', {
            erro: true,
            mensagemErro: 'Por favor digite um dos campos!!',
        });
    } 
    var salario_hora_convertido = parseFloat(dados.salario_horas);
    var horas_convertida = parseFloat(dados.horas_trabalhadas);

    var salario_regular = (salario_hora_convertido * 160);
    var salario_final = 0;

    var hora_extra = horas_convertida - 160;

    //console.log(`Salário Regular : ${salario_regular}`);
    //console.log(`Salário Final : ${salario_final}`);
    //console.log(`Hora Extra : ${hora_extra}`);


    if(hora_extra >= 0){
        salario_final = salario_regular + (hora_extra * (salario_hora_convertido+0.5));

        //console.log(`Cálculo : ${(hora_extra * (salario_hora_convertido+0.5))}`);
        //console.log(`Salário com hora extra: ${salario_final}`);
        response.render('exerc7',{salario_final},erro);
    }
    else{
        salario_final = salario_regular;
        //console.log(`Salário sem hora extra: ${salario_final}`);
        response.render('exerc7',{salario_final},erro);
    }
});


module.exports = Router;
