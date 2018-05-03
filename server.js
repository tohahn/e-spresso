var http = require('http'),
    url = require('url');

var USER_NAMES=["jere","lena","paul","tobias"];

//creates the server for listening
http.createServer(function(req, res) {
	//get input
	var url = new URL(req.url);
	var params = url.pathname.split("/");

	//input validation
	if (params.length != 2 && params.length != 1) {
		console.log("Wrong number of input parameters");
		return;
	}

	var name_index = USER_NAMES.indexOf(params[0].toLowerCase());
	if (name_index == -1) {
		console.log("Name not found!");
		return;
	}
	
	var number_coffee = 1;
	if (params.length == 2) {
		number_coffee = parseInt(params[1]);
		if (isNaN(number_coffee)) {
			console.log("Second parameter is no number! Assume 1.");
			number_coffee = 1;
		}
	}

	console.log("Got order from " + USER_NAMES[name_index] + " for " + number_coffee + " espressi.");
}).listen(80, 'localhost');

console.log("Server running");
