const { response } = require('express');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const bodyParse = require('body-parser');

const PORT = process.env.PORT || 2000;

const app = express();

app.engine('handlebars', expressHandlebars.engine());

app.set('view engine','handlebars');

app.set('views','./views');

app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'));

app.use(bodyParse.urlencoded({extended:true}));

/*Página Home*/
app.get("/",function(request,response){
    response.render('home',{
        tituloPagina:  'Lista 1 de Programação Web 2'
    })
});

/*Sobre*/
app.get('/sobre',function (request,response) {
    response.render('sobre',{
        tituloPagina: 'Esta é a página Sobre',
        nome: 'Maria',
        idade: 23
    });
    
});

/*Contatos*/
app.get('/contato',function (request,response) {
    response.render('contato');
});

app.post('/contato', function (request,response){
    let dadosRender = {
        dadosValidos: true,
        nome: request.body.nome,
        email: request.body.email,
        idade: request.body.idade
    };

    if(request.body.nome.length < 3){
        dadosRender = {
            dadosValidos: false,
            mensagemErro: ' Nome precisa ter pelo menos 3 letras'
        };
        console.log(mensagemErro)
    }
    console.log(dadosRender);
    response.render('contato',dadosRender);
})

app.listen(PORT,function(){
    console.log(`Server is running at port ${PORT}`);
});



