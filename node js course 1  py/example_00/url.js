

const http=require("http")
const fs= require("fs")
const url= require("url")

const myServer=http.createServer((req,res)=>{
if (req.url=="/favicon.ico") return ""

    const myUrl=url.parse(req.url,true)

    let resQue=(myUrl.query.time);
    console.log(resQue);
    
    let log= `${Date.now()}: ${req.url}\n`
    
    fs.appendFile("./log.txt",log ,((err)=>{}))
    res.end(resQue)
})

myServer.listen(8000,()=>{
    console.log("server listen in 8000");
})