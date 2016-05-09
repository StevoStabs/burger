var express = require('express');
var burger = require('../models/burger.js');
var orm = require('../config/orm.js');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();



// Routes
// =============================================================
module.exports = function(app){

	app.get('/', function(req, res){

		res.sendFile(path.join(__dirname + '/../views/home.html'));

	});

	
	app.get('/api', function(req, res){

		orm.allBurgers(function(data){
			res.json(data);
		});	
		
	});

	app.post('/api/:burger', function(req, res){

		var newBurger = req.params.burger;

		console.log(newBurger);
		orm.addBurger(newBurger, function(data){
			res.json(data);
		});


	});
	
	
}