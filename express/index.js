import express from "express";
import product from "./product.js";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());
let PORT = process.env.PORT || 8000;

const loginMiddleware = (req, res, next) => {
  req.name = "Ayan";
  console.log(req.method);
  next();
};

const commonIndex = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  let productIndex = product.findIndex((prod) => prod.id == Number(id));
  Object.assign(req, { productIndex, id, body });
  next();
};

app.use(loginMiddleware);

//GET----

app.get("/", (req, res) => {
  console.log("hello", req.name);

  res.status(201).send("Hello World!");
});

app.get("/api/products/", (req, res) => {
  res.status(201).send(product);
});

app.get("/api/products/:id", commonIndex, (req, res) => {
  let { productIndex, id, body } = req;
  if (isNaN(id)) res.status(404).send("invalid params");
  let singleProduct = product[productIndex];
  res.status(200).send(singleProduct);
});

app.get("/api/test/", (req, res) => {
  //QUERY
  let { filter, value } = req.query;

  let filteredItem = product.filter((item) =>
    item[filter].toString().includes(value)
  );
  console.log(filteredItem);

  res.status(201).json(filteredItem);
});

//POST_____________

app.post("/api/products/", (req, res) => {
  let newProduct = req.body;

  newProduct.id = uuidv4();

  product.push(newProduct);

  console.log(product.length);

  res.status(200).send(product);
});

//PUT----
app.put("/api/products/:id", commonIndex, (req, res) => {
  let { productIndex, id, body } = req;

  product[productIndex] = { id: Number(id), ...body };

  res.status(200).send(product);
});
//PATCH----

app.patch("/api/products/:id", commonIndex, (req, res) => {
  let { productIndex, id, body } = req;

  console.log(req.productIndex);

  product[productIndex] = { ...product[productIndex], ...body };

  res.status(200).send(product);
});
//DELETE---

app.delete("/api/products/:id", commonIndex, (req, res) => {
  let { productIndex, id, body } = req;

  product.splice(productIndex, 1);

  console.log(product);
  res.status(200).send(product);
});

app.listen(PORT, () => {
  console.log(`port running on ${PORT}`);
});
