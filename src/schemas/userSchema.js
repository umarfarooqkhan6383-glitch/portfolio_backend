import Joi from "joi";

export const studentSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(6).required(),
  message: Joi.string().min(10).required()
});
