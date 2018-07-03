const http=require('http')
const querystring=require('querystring')

http.createServer((req,res)=>{
    //post请求可以很大，所以会将请求先分段，后分段发送
    //POST-req
    // data-有一段数据到达（很多次）
    //req.on添加事假，每来一次添加一次（不好的方案），req.on('end',function(){})只会有一次，最终的结果
    // console.log(req)
    let str=''
    let i=0
    req.on("data",function(data){
        //如果testarea里面文字足够多，可以看到多次接收
        console.log(`第${i++}次收到数据。`)
        str+=data
    })
    req.on('end',function(){
        //使用querystring来解析请求
        var POST=querystring.parse(str)
        console.log(POST)
    })
    res.end()
}).listen(8880)