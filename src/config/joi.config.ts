import * as Joi from 'joi';

export const ValidationSchema = Joi.object({
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_PORT: Joi.number().default(5432),
  PORT: Joi.number().default(4000),
});
