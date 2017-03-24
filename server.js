var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://localhost/doa-se');

http.createServer(app)
.listen(3000, function() {
	console.log('Servidor iniciado');
});
