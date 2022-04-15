let http = require('http')
let url = process.argv[2]
/**
 * GET is used to request data from a specified resource.
 */
http.get(url, function (response) {
    response.setEncoding('utf-8')
    response.on('data', function (data) {
        console.log(data)
    })
    response.on('error',console.error)
})