const http = require('http');

var server = http.createServer(function(req, res) {
    // console.log(req)
    console.log(req.url)
    //会显示有两个请求，一个是用户的请求，另外一个favicon，网站tab上的小图标，是chrome自己添加上的。
    //普通的情况可能是页面要添加 <link rel="shortcut icon" href="/favicon.ico">

    switch (req.url) {
        case '/1.html':
            res.write("111")
            break;
        case '/2.html':
            res.write("222")
            break;
        case '/3.html':
            res.write("333")
            break;
        default:
            res.write("404")
            break;
    }
    res.end()
})
server.listen(8888)