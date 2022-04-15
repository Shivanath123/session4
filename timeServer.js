const net = require('net')
function zerofill(i) {
    return (i<10? '0' :'') + i
}
function now () {
    /**
     * Date object is used to work with dates and times.
     */
    var date = new Date()
    return date.getFullYear() + '-'
    + zerofill(date.getMonth() + 1) + '-'
    + zerofill(date.getDate()) + ' '
    + zerofill(date.getHours()) + ':'
    + zerofill(date.getMinutes())
}
const server = net.createServer(function (scoket) {
    scoket.end(now()+'\n')
})
server.listen(Number(process.argv[2]));