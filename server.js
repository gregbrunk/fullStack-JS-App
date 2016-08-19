'use strict'

// Setup Modules
const express    = require('express');
const app        = express();
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const port       = process.env.PORT || 3000;
const path = require('path');

// Use Public for Frontend
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/cards', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/cards/:id', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/card.html'));
});

// Start Server
app.listen(port, function() {
  console.log('Server started on', port); 
});