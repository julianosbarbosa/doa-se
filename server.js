var http = require('http'), // http o modulo que cria o servidor
    app = require('./config/express'), //estancio meu express no app 
    db = require('./config/database');

http.createServer(app).listen(3000, function() { // http.createServer(app executa as requisições e resposta de cada pagina) cria o servidor .listen ouve a porta 3000 e passo uma function de segundo parametro
    console.log('Servidor estutando na porta: ' + this.address().port);
});

//apos criar o Servidor fazer o npm init