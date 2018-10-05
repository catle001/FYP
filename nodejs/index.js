var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const htmlfile = 'public/histogram3.html';

const server = http.createServer(function (req, res) {
	fs.readFile(htmlfile , function(err, data) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write(data);
	    res.end('Hello World!');
	});
});

server.listen(port, hostname, () =>{
	console.log('server started on port ' + port);
});