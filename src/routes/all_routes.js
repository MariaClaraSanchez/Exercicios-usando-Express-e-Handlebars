const express = require('express');

const Router = express.Router();

const Exercicio_1 = require('./route_exerc1');
const Exercicio_2 = require('./route_exerc2');
const Exercicio_3 = require('./route_exerc3');
const Exercicio_4 = require('./route_exerc4');

Router.use(Exercicio_1);
Router.use(Exercicio_2);
Router.use(Exercicio_3);
Router.use(Exercicio_4);

// Router.use(Exercicio_5);
// Router.use(Exercicio_6);
// Router.use(Exercicio_7);
// Router.use(Exercicio_8);
// Router.use(Exercicio_9);
// Router.use(Exercicio_10);
// Router.use(Exercicio_11);


module.exports = Router;