import express from "express";
import product from "./product.js";
import { v4 as uuidv4 } from "uuid";

const app = express();

let PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(201).send("Hello World!");
});

app.get("/api/users/", (req, res) => {
  res.status(201).json({ name: "ayan" });
});

app.get("/api/products/:id", (req, res) => {
  let productId = Number(req.params.id);
  if (isNaN(productId)) res.status(404).send("invalid params");

  let singleProduct = product.find((e) => e.id == productId);

  res.status(200).send(singleProduct);
});

app.get("/api/test/", (req, res) => {
  let { filter, value } = req.query;

  let filteredItem = product.filter((item) =>
    item[filter].toString().includes(value)
  );
  console.log(filteredItem);

  res.status(201).json(filteredItem);
});

//POST_____________

app.post("/api/post/", (req, res) => {
  let newUser = req.body;

  newUser.id = uuidv4();

  product.push(newUser);

  console.log(product.length);

  res.status(200).send(product);
});

app.put("/api/users/:id",(req,res)=>{

  const {params:{id},body}=req

 let newUserIndex= product.findIndex((user)=>user.id==id )

 console.log(newUserIndex);

 product[newUserIndex]={id:Number(id),...body}

res.status(200).send(product);

})

app.patch("/api/users/:id", (req, res) => {
  let {
    params: { id },
    body,
  } = req;

  let productIndex = product.findIndex((user) => user.id == Number(id));

  console.log(productIndex);

  product[productIndex] = { ...product[productIndex], ...body };

  res.status(200).send(product);
});

app.delete("/api/users/:id", (req, res) => {
  let {
    params: { id },
  } = req;
  let productIndex = product.findIndex((user) => user.id == Number(id));

  product.splice(productIndex, 1);

  console.log(product);
  res.status(200).send(product);
});

app.listen(PORT, () => {
  console.log(`port running on ${PORT}`);
});
