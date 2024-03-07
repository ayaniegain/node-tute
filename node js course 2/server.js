const express= require('express')

const app=express()

app.get('/',(req,res)=>{

    let myCar={
        "name":"Audi",
        "price":"2cr",
        "color":"black",
        "automatic":true
    }

    res.send(myCar)

})


app.listen(8000,()=>{
    console.log("server connected");
}) 