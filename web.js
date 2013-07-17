var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer(14);

app.get('/', function(request, response) {
    fs.readfilesync('index.html',function(err,buffer){
	if(err) throw err;});

 response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});