var http = require('http')
/**
 * to include a module, use the require function with the name of module
 */
var bl = require('bl')
var urlLength = process.argv.length
var nextUrl = function (urlLength, i) {
    if(urlLength>i) {
        var url = process.argv[i]
        var msg = ''
        http.get(url, function (response) {
            response.setEncoding('utf8')
            response.pipe(bl(function (error, data) {
                if (error) 
                    return console.error(error)
                    msg = data.toString();
            })
            )
            response.on('end',function () {
                console.log(msg)
                nextUrl(urlLength, i+1)
            })
            response.on('error', console.error)
        })
    }
}
nextUrl(urlLength, 2)