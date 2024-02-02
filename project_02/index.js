import express from 'express'
const app = express()
import color from "colors"
import { configDotenv } from "dotenv"
configDotenv()

app.use(express.json())

app.use('/api/v1/url',(req,res)=>{
    res.json({name:"ayan"})
})

const port=process.env.PORT || 8800

app.listen(port,()=>{
    console.log((`port running on ${port}`));
})