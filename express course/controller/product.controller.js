import product from "../product.js";
import { v4 as uuidv4 } from "uuid";

const postProductController = (req, res) => {
  let newProduct = req.body;

  newProduct.id = uuidv4();

  product.push(newProduct);

  console.log(product.length);

  res.status(200).send(product);
};

const putProductController = (req, res) => {
  let { productIndex, id, body } = req;

  product[productIndex] = { id: Number(id), ...body };

  res.status(200).send(product);
};

const patchProductController = (req, res) => {
  let { productIndex, id, body } = req;

  console.log(req.productIndex);

  product[productIndex] = { ...product[productIndex], ...body };

  res.status(200).send(product);
};

const deleteProductController = (req, res) => {
  let { productIndex, id, body } = req;

  product.splice(productIndex, 1);

  console.log(product);
  res.status(200).send(product);
};

export {
  putProductController,
  postProductController,
  patchProductController,
  deleteProductController,
};
