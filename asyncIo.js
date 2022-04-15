let fs = require('fs')
/**
 * The fs.readFile() method is used to read files on your computer.
 */
fs.readFile(process.argv[2],'utf-8',function(error,data) {
    if(data){
        let newLine = data.toString().split('\n').length-1
        console.log(newLine)
    }
})