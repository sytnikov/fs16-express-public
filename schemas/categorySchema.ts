import Joi from "joi";

export const categorySchema = Joi.object({
  name: Joi.string().required(),
  images: Joi.array().items(Joi.string().required()).required(),
});
