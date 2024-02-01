const express = require("express");
// const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");
const { type } = require("os");
const app = express();
const port = 8000;
// const router = express.Router();

const databaseConnect = async () => {
  try {
    let db = "mongodb+srv://ayaniegain:12345@cluster0.05adgij.mongodb.net/mydata";
    const conn = await mongoose.connect(db);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

databaseConnect();

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  ip_address: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("users", userSchema);

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

app.use((req, res, next) => {
  let vol = "hello";
  req.cer = vol;
  console.log("this is middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log(req.cer);

  fs.appendFile(
    "./log.txt",
    `\n ${Date.now()} |  ${req.method} |  ${req.path}| ${res.statusCode}`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  console.log("this is middleware 2");
  next();
});

app.get("/api/users",async (req, res) => {
  res.setHeader("x-myData", "Ayan");

  let user =await User.find()

  console.log(user);
      return res.status(201).json({ status: "success", user });


});


app.get("/api/users/:id",async (req, res) => {
  let id = (req.params.id);

  await User.findById(id)
  .then(function (models) {
    res.status(200).send(models)
  })
  .catch(function (err) {
    console.log(err);
  });
})


app.delete("/api/users/:id",async (req, res) => {
  let id = (req.params.id);

  await User.findByIdAndDelete(id)
  .then(function (models) {
    res.status(200).send(models)
  })
  .catch(function (err) {
    console.log(err);
  });


  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(deleteUser), (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });

  // console.log(deleteUser);
});

app.put("/api/users/:id",async (req, res) => {
  const userId = (req.params.id);
  const updatedUser = req.body;

 await User.findByIdAndUpdate(userId,updatedUser)
  .then(function (models) {
    res.status(200).send(models)
  })
  .catch(function (err) {
    console.log(err);
  })



  // // Find the user with the provided ID
  // const userIndex = users.findIndex((user) => user.id === userId);

  // if (userIndex !== -1) {
  //   // Update the user
  //   users[userIndex] = { ...users[userIndex], ...updatedUser };

  //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
  //     if (!err) {
  //       console.log({ status: "success" });
  //     }
  //   });
  // } else {
  //   res.status(404).json({ message: "User not found" });
  // }
});

app.post("/api/users", async (req, res) => {
  const { first_name, last_name, email, gender, ip_address } = req.body;

  if(!first_name|| !last_name|| !email|| !gender|| !ip_address)return res.send('all field required')

  user = new User({
    first_name,
    last_name, 
    email,
    gender,    
    ip_address,
});
await user.save();

if(user) return res.status(201).json({ status: "success" });

  // users.push({ ...body, id: users.length + 1 });

  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     return res.status(201).json({ status: "success", id: users.length });
  //   }
  // });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
