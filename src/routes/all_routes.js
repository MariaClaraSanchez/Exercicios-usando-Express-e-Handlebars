const express = require('express');

const Router = express.Router();

const Exercicio_1 = require('./route_exerc1');
const Exercicio_2 = require('./route_exerc2');
const Exercicio_3 = require('./route_exerc3');
const Exercicio_4 = require('./route_exerc4');
const Exercicio_5 = require('./route_exerc5');
const Exercicio_6 = require('./route_exerc6');
const Exercicio_7 = require('./route_exerc7');
const Exercicio_8 = require('./route_exerc8');
const Exercicio_9 = require('./route_exerc9');
// const Exercicio_10 = require('./route_exerc10');
// const Exercicio_11 = require('./route_exerc11');

Router.use(Exercicio_1);
Router.use(Exercicio_2);
Router.use(Exercicio_3);
Router.use(Exercicio_4);
Router.use(Exercicio_5);
Router.use(Exercicio_6);
Router.use(Exercicio_7);
Router.use(Exercicio_8);
Router.use(Exercicio_9);
// Router.use(Exercicio_10);
// Router.use(Exercicio_11);

module.exports = Router;