var express = require('express');
var app = express();
var path = require('path')
var gameQuery = require('./db/gameQuery.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var query = new gameQuery();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/savedgames', function (req, res) {
  var data = req.body;

  query.add(data, function(docs) {
    res.json({data: docs});
  });
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app running at local host:', host, port);
});
