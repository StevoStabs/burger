var connection = require('./connection.js');

//Object Relational Mapping (ORM)
var orm = {
    allBurgers: function(callback){
		var s = 'SELECT * FROM burgers;'

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	addBurger: function(burger, callback){
		var s = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";

		connection.query(s,[burger.burger_name, burger.devoured], function(err, result) {
            
            callback(result);

        });

	},

	eatenBurger: function(burger, callback){
		var s = "SELECT * FROM burgers WHERE devoured = true;";

		connection.query(s, function(err, result) {
	 
            callback(result);

        });

	},

	searchBurger: function(burger, callback){
		var s = "SELECT * FROM burgers WHERE burger_name=?";

		connection.query(s, function(err, result) {
	 
            callback(result);

        });

	}

    
};
    
module.exports = orm;