// Criação do ProdutoService
var MongoConnection = require("../common/MongoConnection")

function ProdutoService(){
	
}

ProdutoService.save = function(produto, callback){
	var mongoConnection = new MongoConnection().open(function(err,db){
		if(produto._id != null && produto._id != ""){
			produto._id = MongoConnection.getObjectID(produto._id)
			db.collection('produtos').updateOne({"_id":produto._id}, produto, function(err, result){
				console.log(err)
				callback(err, result)
				db.close()
			})
			}else{
			delete aluno._id
			db.collection('produtos').insertOne(produto, function(err, result){
				produto._id = result.insertedId
				callback(err, result)
				db.close()
			})
		}
	})
}

ProdutoService.list = function(callback){
	var mongoConnection = new MongoConnection().open(function(err,db){
		db.collection('produtos').find({}).toArray(function(err, result){
			callback(err, result)
			db.close()
		})
	})
}

ProdutoService.delete = function(produto, callback){
	var objectId = MongoConnection.getObjectID(produto._id)
	var mongoConnection = new MongoConnection().open(function(err,db){
		db.collection('produtos').deleteOne({_id: objectId}, function(err, result){
			callback(err, result)
			db.close()
		})
	})
}

ProdutoService.find = function(search, callback){
	var mongoConnection = new MongoConnection().open(function(err,db){
		db.collection('produtos').find(search).toArray(function(err, result){
			callback(err, result)
			db.close()
		})
	})
}

ProdutoService.findById = function(id, callback){
	var objectId = MongoConnection.getObjectID(id)
	var mongoConnection = new MongoConnection().open(function(err,db){
		db.collection('produtos').find({_id: objectId}).toArray(function(err, result){
			callback(err, result)
			db.close()
		})
	})
}

module.exports = ProdutoService


//Classe do produto
var ProdutoService = require("../services/ProdutoService")

function produto(){ //Dados do produto
	this._id = null //ID-Produto
	this.ldL = null //ID-Loja
	this.dcP = null //Descrição
	this.vlP = null //Valor
	this.qtP = null //Estoque
	this.upP = null //Update
}

produto.prototype.save = function(callback){
	var produto = this
	ProdutoService.save(produto, callback)
}

produto.prototype.delete = function(callback){
	var produto = this
	ProdutoService.delete({"_id": produto._id}, callback)
}

produto.list = function(callback){
	ProdutoService.list(callback)
}
