//Construtor
function ProdutosDAO(connection){
    this._connection = connection;
}

//Função
ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from produtos',callback);
}

//Exportantdo a classe
module.exports = function(){
    return ProdutosDAO;
}