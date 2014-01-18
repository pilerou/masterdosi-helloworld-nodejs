var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({result : 'hello ' + req.query.nom});
});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');