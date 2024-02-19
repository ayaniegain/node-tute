import express from "express";

import product from "./product.js";

const app = express();

let PORT = process.env.PORT || 8000;

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

    let {page,limit} = req.query;

    console.log(page,limit);
    res.status(201).json({ name: "ayan" });
  });
  


app.listen(PORT, () => {
  console.log(`port running on ${PORT}`);
});
