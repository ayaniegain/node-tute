import express from "express";


const app= express()

let PORT=process.env.PORT || 8000

app.get('/', (req, res) => {
    res.status(201).send('Hello World!')
  })

  

app.listen(PORT,()=>{
    console.log(`port running on ${PORT}`);
})