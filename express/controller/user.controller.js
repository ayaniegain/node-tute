import product from "../product.js";

const getUserController = (req, res) => {
  let { productIndex, id, body } = req;
  if (isNaN(id)) res.status(404).send("invalid params");
  let singleProduct = product[productIndex];
  res.status(200).send(singleProduct);
};

const getQueryController = (req, res) => {
  //QUERY

  let { filter, value } = req.query;

  let filteredItem = product.filter((item) =>
    item[filter].toString().includes(value)
  );
  console.log(filteredItem);

  res.status(201).json(filteredItem);
};

export { getUserController, getQueryController };
