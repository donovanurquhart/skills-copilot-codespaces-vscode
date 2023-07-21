// create web server
// to run: node comments.js
// then open browser and go to http://localhost:3000
// to stop: ctrl + c

var http = require('http');
var url = require('url');

// create server
http.createServer(function (req, res) {
	// parse the url
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;

	// get the callback
	var callback = query.callback;

	// get the comment
	var comment = query.comment;

	// create response
	var response = callback + '({"comment": "' + comment + '"})';

	// write the response
	res.writeHead(200, {'Content-Type': 'text/javascript'});
	res.write(response);
	res.end();
}).listen(3000);