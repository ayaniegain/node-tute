const express= require('express')
const connectDB = require('./db');
const app=express()

connectDB()
app.use(express.json())


app.get('/',(req,res)=>{

    let myCar={
        "name":"Audi",
        "price":"2cr",
        "color":"black",
        "automatic":true
    }

    res.send(myCar)

})

app.post('/items',(req,res)=>{

    let data=req.body
    console.log(data);
    res.send("data saved...")
})


app.listen(8000,()=>{
    console.log("server connected");
}) 