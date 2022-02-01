const express = require('express');
const Router = express.Router();

/*Exercício 9*/
Router.get('/exerc9', function (request, response) {
    response.render('exerc9', {
        tituloPagina: 'Exercício Número 9'
    });
});

Router.post('/exerc9', function (request, response) {
    let combustivel = {
        litro: request.body.litros,
        tipo: request.body.tipo,
    };

    const gasolina = 3.30;
    const alcool = 2.90;
    const erro = false;


    if (!combustivel.litro) {
        return response.render('exerc9', {
            erro: true,
            mensagemErro: 'Por favor digite a quantidade de litros!!',
        });
    }

    var valor_pago = 0;

    if (combustivel.litro <= 20) {
        if(combustivel.tipo == "Gasolina"){
            valor_pago = (combustivel.litro * 0.04) * gasolina;
            //console.log(`Valor pago total Gasolina : ${valor_pago}`);
        }
        else{   
            valor_pago = (combustivel.litro * 0.03) * alcool;
            //console.log(`Valor pago total Álcool : ${valor_pago}`);
        }  
    }
    else{
        if(combustivel.tipo == "Gasolina"){
            valor_pago = (combustivel.litro * 0.06) * gasolina;
            //console.log(`Valor pago total Gasolina : ${valor_pago}`);
        }
        else{   
            valor_pago = (combustivel.litro * 0.04) * alcool;
            //console.log(`Valor pago total Álcool : ${valor_pago}`);
        }    
    }
    valor_pago = Math.round(100*valor_pago)/100;
    response.render('exerc9',{categoria:combustivel.tipo,valor_pago },erro);  
    
});

module.exports = Router;