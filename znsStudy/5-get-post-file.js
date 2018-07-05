const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var server = http.createServer(function(req, res) {
    //GET
    var obj = urlLib.parse(req.url, true);

    var url = obj.pathname;
    const GET = obj.query;

    //POST
    var str = '';
    req.on('data', function(data) {
        str += data;
    });
    req.on('end', function() {
        const POST = querystring.parse(str);

        /*
        url——要什么
        GET——get数据
        POST——post数据
        */
        console.log(url, GET, POST)

        //文件请求  http://localhost:8081/1.html 或者 http://localhost:8081/gulp.zip
        var file_name = 'znsStudy/asset' + url;
        fs.readFile(file_name, function(err, data) {
            if (err) {
                res.write('404');
            } else {
                console.log('返回data',data,`data默认是buffer，toString()格式化后：`, data.toString())
                res.write(data);
            }
            res.end();
        });
    });
});

server.listen(8081);