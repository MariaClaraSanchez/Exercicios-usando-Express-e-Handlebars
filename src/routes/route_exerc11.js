const express = require('express');
const Router = express.Router();

/*Exercício 11*/
Router.get('/exerc11', function (request, response) {
    response.render('exerc11', {
        tituloPagina: 'Exercício Número 11'
    });
});

Router.post('/exerc11', function (request, response) {
    let dados = {
        nome: request.body.nome,
        email: request.body.email,
        cpf: request.body.cpf,
        idade: request.body.idade,
    };

    const erro = false;

    if (!dados) {
        return response.render('exerc11', {
            erro: true,
            mensagemErro: 'Por favor digite um dos dados!!',
        });
    }
    const dados_pessoais = [];

    const nome = dados.nome;
    const email = dados.email;
    const cpf = dados.cpf;
    const idade = dados.idade;

    dados_pessoais.push(`Nome: ${nome}\nE-mail: ${email}\nCPF: ${cpf}\nIdade: ${idade}`);
    response.render('exerc11', {dados_pessoais}, erro);
});


module.exports = Router;


