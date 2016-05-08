var express = require('express');
var burger = require('../models/burger.js');
var orm = require('../config/orm.js');
var path = require('path');

// Routes
// =============================================================
module.exports = function(app){

	app.get('/', function(req, res){

		// If the user provides a specific character in the URL...
		
			// Otherwise display the data for all of the characters. 
			// (Note how we're using the ORM here to run our searches)
			// });
			res.sendFile(path.join(__dirname + '/../views/home.html'));

	});

	// Search for Specific Character (or all characters) then provides JSON
	app.post('api/new', function(req, res){

		// If the user provides a specific character in the URL...
		var newBurger = req.body;

			// Then display the JSON for ONLY that character.
			// (Note how we're using the ORM here to run our searches)
			orm.addBurger(newBurger,function(data){
				
			});
		

		// Otherwise...
		

	});

	
	
}