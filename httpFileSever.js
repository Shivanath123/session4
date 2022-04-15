const fs = require('fs');
const http = require('http');
var port = Number(process.argv[2]);
var file = process.argv[3];
/**
 * createsever method to create an http server
 */
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type' : 'text/plain'} );
    var stream = fs.createReadStream(file);
    stream.pipe(res);
})
server.listen(port);