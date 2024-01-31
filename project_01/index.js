const express = require("express");
const users = require("./MOCK_DATA.json");
const fs= require('fs')
const app = express();
const port = 8000;

// app.get("/users", (req, res) =>{

//     const html=`<ul>
//     ${
//         users.map((user)=>(`<li>${user.first_name}</li>`))
//     }
//     </ul>`
//     return res.send(html)
// });

// app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/api/users", (req, res) => {
  return res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let singleUser = users.find((user) => user.id == id);

  return res.send(singleUser);
});
app.delete("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let deleteUser = users.filter((user) => user.id !== id);

   
 fs.writeFile("./MOCK_DATA.json",JSON.stringify(deleteUser),(err)=>{
  if (err) {
    console.log(err);
}
})

  return res.send(deleteUser);
});



app.put("/api/users/:id", (req, res) => {

  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  // Find the user with the provided ID
  const userIndex = users.findIndex(user => user.id === userId);
  

  if (userIndex !== -1) {
    // Update the user
    users[userIndex] = { ...users[userIndex], ...updatedUser };
   
 fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
  if (!err) {
    console.log({status:"success"});
}
})
  } else {
    res.status(404).json({ message: 'User not found' });
  }


//  fs.writeFile("./MOCK_DATA.json",JSON.stringify(updateUser),(err)=>{
//   if (!err) {
//     console.log({status:"success"});
// }
// })

})



app.post("/api/users", (req, res) => {
  const body = req.body;

 users.push({...body,id:users.length+1})

  
 fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
  if (err) {
    console.log(err);
}
 
else {
   return res.json({status:"success",id:users.length})
}
 })

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
