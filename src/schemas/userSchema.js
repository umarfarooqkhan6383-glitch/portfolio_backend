import Joi from "joi";

export const studentSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(6).required(),
  message: Joi.string().min(10).required()
});

export const hireschema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  project: Joi.string().min(5).required(),
  description: Joi.string().min(20).required()
})