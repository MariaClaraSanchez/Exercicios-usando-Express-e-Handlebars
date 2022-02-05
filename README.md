
# Exercicios usando Express e Handlebars
Lista de exercícios desenvolvida afim de resolver uma atividade avaliativa da disciplina de programação web II. 
Para rodar esse projeto em sua máquina só seguir a configuração inicial abaixo:
  
# Configuração Inicial
Tem - se duas opções para rodar o projeto com npm ou yarn ai só escolher a que for melhor.
#### yarn
```
yarn
```
ou 
```
yarn install
```
#### npm
```
npm install
```

## Iniciando o projeto
Para iniciar o projeto basta dar um dos comandos abaixo:

#### yarn
```
yarn dev
```
ou
```
yarn start
```
#### npm
```
npm start
```
## Observação
Dependo do seu sistema operacional vai ser necessário mudar o caminho do arquivo index.js
para isso só alterar ele no arquivo `package.json` 

```` js
{
  "scripts": {
    "start": "node caminho",
    "dev": "nodemon caminho"
  },
  "dependencies": {
    "body-parser": "^1.19.1",
    "express": "^4.17.2",
    "express-handlebars": "^6.0.2",
    "nodemon": "^2.0.15",
    "router": "^1.3.6"
  }
}
```
