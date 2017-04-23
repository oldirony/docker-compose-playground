const http = require('http');

console.log('Server running at 8080');

const server = http.createServer( (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('okayish');
}).listen(8080);