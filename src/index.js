const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const bodyParse = require('body-parser');
const Exercicio_1 = require('./routes/route_exerc_1');

const PORT = process.env.PORT || 3000;

const app = express();

app.engine('handlebars', expressHandlebars.engine());

app.set('view engine','handlebars');

//app.set('views','./views');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'));

app.use(bodyParse.urlencoded({extended:true}));



/*Página Home*/
app.get("/",function(request,response){
    response.render('home',{
        tituloPagina:  'Lista 1 de Programação Web 2'
    })
});

/*Exercício 1 */
app.get('/exerc1',async (req,resp) => {
    resp.render('exerc1',{
        tituloPagina:  'Exercício Número 1'
    });
});

app.post('/exerc1', async (req,resp) => {

    let valor = req.body.valor;
    console.log(req.body.valor);
    resp.render('exerc1',valor);
});

app.listen(PORT,function(){
    console.log(`Server is running at port ${PORT}`);
});

