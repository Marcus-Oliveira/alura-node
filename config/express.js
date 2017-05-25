var express = require('express');
var load = require('express-load');

module.exports = function (){
    
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //(Pastar de arquivos a ser carregada, {cwd: 'pasta onde procurar os arquivos'})
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}