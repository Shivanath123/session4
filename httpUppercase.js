var http = require('http')
 var map = require('through2-map')
 var server = http.createServer(function (req, res) {
     if (req.method != 'POST')
     return res.end('send me a POSt\n')

req.pipe(map(function (chuck) {
    return chuck.toString().toUpperCase()
})).pipe(res)
/**
 * pipe method turn readabe stream into specified writeable stream
 */
 })
 server.listen(Number(process.argv[2]))