var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.use(express.static(path.join(__dirname)));
// app.use(express.static('public'));

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})