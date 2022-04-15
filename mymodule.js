const path = require("path");
let fs = require('fs')
/**
 * module.exports is used to export from given file so that other files are allowed to access the expoted code 
 */
module.exports = function (buf, ext, callback ) {
        fs.readdir(buf, function (error, data) {
        if (error) {
            return callback(error)
        }
        /**
         * filter method create a new array filled with elements that pass a test provided by a function
        */
           data = data.filter((data)=> {
                    return path.extname(data) === '.' + ext
                })
            callback(null, data)
        }) 
    
}