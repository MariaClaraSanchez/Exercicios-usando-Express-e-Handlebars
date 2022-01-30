const express = require('express');
const Router = express.Router();

/*Exercício 6*/
Router.get('/exerc6', function (request, response) {
    response.render('exerc6', {
        tituloPagina: 'Exercício Número 6'
    });
});

Router.post('/exerc6', function (request, response) {
    let dados = {
        nota1: request.body.nota1,
        nota2: request.body.nota2,
        nota3: request.body.nota2,
    };
    const erro = false;

    if ((!dados.nota1)||(!dados.nota2)||(!dados.nota3)) {
        return response.render('exerc6', {
            erro: true,
            mensagemErro: 'Por favor digite um dos campos!!',
        });
    } 
    var n1 = parseFloat(dados.nota1);
    var n2 = parseFloat(dados.nota2);
    var n3 = parseFloat(dados.nota3);
    //console.log(n1); 
    //console.log(n2); 
    //console.log(n3); 

    //console.log(typeof(n1)); 
    //console.log(typeof(n2)); 
    //console.log(typeof(n3)); 

    const mediaNotas = (n1+n2+n3)/3;
    //console.log(mediaNotas); 

    if (mediaNotas >= 6){
        response.render('exerc6',{situacao:'APROVADO',mediaNotas},erro);
    }
    else{
        situacao = true
        response.render('exerc6',{situacao:"REPROVADO",mediaNotas},erro);
    }
});
module.exports = Router;
