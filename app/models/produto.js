/**
 * File: produto.js
 * Description:  Aequivo responsável pelo tratamento da classe "Produtos"
 * Author: Cleirton Viana
 * Create Date: 04/03/2017
 */

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 /**
  * Produto:
  * -> Id : int
  * -> Nome : String
  * -> Preço : Number
  * -> Descrição : String
  */

  var ProdutoSchema = new Schema({
      nome:String,
      preco:Number,
      descricao:String
  });

module.exports = mongoose.model('Produto', ProdutoSchema);

// Conexão do mongodb:  mongodb://csviana:senha1234@ds012538.mlab.com:12538/node-crud-api

