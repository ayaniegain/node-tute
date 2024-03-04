const express = require("express");
// const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");

const { type } = require("os");
const { databaseConnect } = require("./config/db.config");
const { logfileMiddleware, middlewareOne } = require("./middleware/index.middleware");
const { User } = require("./models/user.model");
const  appRouter  = require("./router/user.router");
const app = express();
const port = 8000;
// const router = express.Router();



databaseConnect();


// app.get("/users", (req, res) =>{

//     const html=`<ul>
//     ${
//         users.map((user)=>(`<li>${user.first_name}</li>`))
//     }
//     </ul>`
//     return res.send(html)
// });

// app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(middlewareOne);

app.use(logfileMiddleware( "./log.txt"));

app.use("/api/users", appRouter);





app.listen(port, () => console.log(`Example app listening on port ${port}!`));
