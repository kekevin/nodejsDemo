const http = require("http")
const fs = require("fs")

var server = http.createServer(function(req, res) {
    var fileName = "znsStudy/asset" + req.url
    fs.readFile(fileName, function(err, data) {
        console.log("2")
        if (err) {
            res.write("404")
        } else {
            res.write(data)
        }
        res.end()
    })
    //服务器提供的服务都是异步操作，所以会先输出1，再输入2
    console.log("1")
})
server.listen(8888)