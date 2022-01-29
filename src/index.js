const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const bodyParse = require('body-parser');
const Exercicio_1 = require('./routes/route_exerc1');
const Exercicio_2 = require('./routes/route_exerc2');
const Exercicio_3 = require('./routes/route_exerc3');

const PORT = process.env.PORT || 3000;

const app = express();

app.engine('handlebars', expressHandlebars.engine());
 
app.set('view engine','handlebars');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'));

app.use(bodyParse.urlencoded({extended:true}));

/*Página Home*/
app.get("/",function(request,response){
    response.render('home',{
        tituloPagina:  'Lista 1 de Programação Web 2'
    })
});

app.use(Exercicio_1);
app.use(Exercicio_2);
app.use(Exercicio_3);

app.listen(PORT,function(){
    console.log(`Server is running at port ${PORT}`);
});

