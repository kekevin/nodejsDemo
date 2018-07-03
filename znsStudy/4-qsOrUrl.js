const http = require('http')
const urlLib = require('url')

http.createServer((req, res) => {
    //示例请求http://localhost:8880/s.html?ie=UTF-8&wd=aaaa
    //格式化请求可以用字符串操作splice("？")等获得数组，或者使用queryString,
    //最优先选择url，url.parse第二个参数，默认false格式化部分，true格式化所有请求参数
    var obj = urlLib.parse(req.url, true)
    console.log('obj', obj)
    var url = obj.pathname
    var GET = obj.query
    console.log(url, GET)
    res.write('aaa')
    res.end()
}).listen(8880)