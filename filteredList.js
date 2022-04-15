let fs = require('fs')
let path = require('path')
let buf = process.argv[2]
let ext = '.' + process.argv[3]
/**
 * fs.readdir read the content on directory
 */
fs.readdir(buf,(error,file)=>{
    if (error)  return error
        file.forEach(function(file) {
            if (path.extname(file )=== ext) {
            console.log(file)
            }
        })
})