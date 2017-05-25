var mysql = require('mysql');
function createDBConnection(){
    return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'casadocodigo_nodejs'
          });

}

//wrapper ---> Função de embrulho
module.exports = function(){
    return createDBConnection
}