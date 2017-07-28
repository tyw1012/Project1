var express = require('express');
var path = require('path');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.listen(3000, function(){
	console.log('Connected 3000 port!');
})
app.get('/', function(req,res){

	res.sendFile(path.join(__dirname+'/visual.html'));
})