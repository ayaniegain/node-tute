import product from "../product.js";

import  {querySchema}  from "../model/scema.js";
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

// Middleware to validate query parameters
const validateQuery = (req, res, next) => {
  const { error, value } = querySchema.validate(req.query);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  req.validatedQuery = value; // Save validated query parameters to req object
  next();
};

export { loginMiddleware, commonIndex, validateQuery };
