module.exports = function(app){
    app.get('/produtos', function(req, res){
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;
        //Consulta
        produtosBanco.lista(connection, function(err, results){
            //callback do query
            res.render('produtos/lista', {lista : results});
        });
        connection.end();        
    });
}