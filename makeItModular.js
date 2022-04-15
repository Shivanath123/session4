const mymodule = require('./mymodule.js')
/**
 * importing mymodule file by using require method
 */
let buf = process.argv[2]
let ext = process.argv[3]
mymodule(buf, ext,function (error, data) {
    if (error) {
        return error
    }
    else{
        data.forEach(data => {
            console.log(data)
        })
    }
})