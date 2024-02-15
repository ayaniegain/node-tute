import express from 'express'
const app = express()
import color from "colors"
import routerApp from "./routers/url.router.js"
import { configDotenv } from "dotenv"
// import ssm from './middlewares/url.middleware.js'
configDotenv()
let port=process.env.PORT || 8800



app.use(express.json())
// app.use(ssm)

app.use('/api/v1',routerApp),
app.listen(port,()=>{
    console.log((`port running on ${port}`));
})