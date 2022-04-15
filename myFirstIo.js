const fs = require('fs')
/**
 * fs.readFileSync will read the file
 */
var buf = fs.readFileSync(process.argv[2])
/**
 * by using .toString method converting an array into string
 */
var newLine = buf.toString().split('\n').length-1
console.log(newLine)

