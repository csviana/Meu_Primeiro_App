/**
 * File: server.js
 * Description:  Primeiro App
 * Author: Cleirton Viana
 * Create Date: 04/03/2017
 */

 //Configurar o setup da aplicação

 //Chamada dos pacotes:
 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 var mongoose = require('mongoose');
 var router = require('./app/routes/rotas');
 //Criando uma instância das rotas vias Express:
// var router = express.Router();
mongoose.Promise = global.Promise;
//URI do MLab
mongoose.connect('mongodb://csviana:senha1234@ds012538.mlab.com:12538/node-crud-api', {
    useMongoClient: true
});

 //URI Local:
 //mongoose.connect('mongodb://localhost:27017/node-crud-api');


//Definindo a porta da API:
var port = process.env.port || 8000;
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Configuração variável para usar a função bodyParser():
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());

 //Definindo o padrão das rotas prefixadas:
 app.use('/api', router); //register the routes

//Rota padrãp
app.get('/', function(req, res){
res.render('index');
})

//Rota de contato
app.get('/contato', function(req, res){
    res.render('contato');
})

 //iniciando a aplicação (servidor):
 app.listen(port);
 console.log('Iniciando a porta ' + port);
