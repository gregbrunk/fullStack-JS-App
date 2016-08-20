// Setup Modules
var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var port       = process.env.PORT || 3000;
var path       = require('path');
var db         = require('./models');

// Use Public for Frontend
app.use(express.static(__dirname + '/public'));

// View Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/cards', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/cards/:id', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/card.html'));
});

//API Routes
app.get('/api/cards', function (req, res) {
  // send all books as JSON response
  db.Card.find(function(err, cards){
    if (err) { return console.log("index error: " + err); }
    res.json(cards);
  });
});

app.get('/api/cards/:id', function(req, res) {
  db.Card.findOne({_id: req.params.id }, function(err, card) {
    res.json(card);
  });
});

// Start Server
app.listen(port, function() {
  console.log('Server started on', port); 
});