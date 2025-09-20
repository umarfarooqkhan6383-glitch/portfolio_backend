import Joi from "joi";   

export const JoiSchemaValidation = (schema) => {
  return (req, res, next) => {
    if (!schema) return next();

    // validation options
    const validationOptions = {
      abortEarly: false,
      stripUnknown: true,   
      errors: {
        wrap: {
          label: false,
        },
      },
    };

    // validate
    const { error, value } = schema.validate(req.body, validationOptions);

    if (error) {
      const errors = error.details.map((detail) => {
        return {
          key: detail.context.key,
          type: detail.type.split(".")[0],
          message: detail.message,
        };
      });
      return res
        .status(400)
        .json({ status: false, message: "validation error", errors });
    }

    req.body = value;
    return next();
  };
};
