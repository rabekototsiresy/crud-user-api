import * as Joi from 'joi';
export const RegisterSchemaJoi = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
});