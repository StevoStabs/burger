var connection = require('./connection.js');
var burger = require('../models/burger.js');


//Object Relational Mapping (ORM)
var orm = {
    allBurgers: function(callback){
		var s = 'SELECT * FROM burgers;'

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	addBurger: function(burger, callback){
		
		var s = "INSERT INTO burgers (burger_name, devoured) VALUES (?,false)";

		connection.query(s,[burger], function(err, result) {
            
            callback(result);

        });
        
	}

	
    
};
    
module.exports = orm;