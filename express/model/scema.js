
import Joi from "joi";

export  const querySchema = Joi.object({
    filter: Joi.string().valid('name', 'price').required(),
    value: Joi.string().required()
  });