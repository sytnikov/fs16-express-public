import Joi from "joi";

export const authorSchema = Joi.object({
  name: Joi.string().required(),
  images: Joi.array().items(Joi.string().required()).required(),
});
