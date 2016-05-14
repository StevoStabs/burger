var express = require('express');
var Burger = require('../models/burger.js');
//var orm = require('../config/orm.js');
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

		Burger.findAll({})
					.then(function(result){
						res.json(result);
				})
		
	});

	app.post('/api', function(req, res){

		var newBurger = req.body;

		console.log(req.body);
		 Burger.create({
		 	burger_name: newBurger.burger_name,
		 	devoured: newBurger.devoured
		 });


	});
	
	
}