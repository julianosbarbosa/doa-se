var express = require('express'), //modulo que executa as requisições de cada pagina que é solicitado ao servidor
    app = express(), //estancio meu express no app 
    bodyParser = require('body-parser'),
    routes = require('../app/routes');

app.use(express.static('./public')); // static medleware que passa a pasta que vai ser assistida pelo express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

module.exports = app; // exporta para o meu server.js