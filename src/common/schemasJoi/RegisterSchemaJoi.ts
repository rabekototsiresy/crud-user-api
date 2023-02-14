import * as Joi from 'joi';
export const RegisterSchemaJoi = Joi.object({
    id_diosezy: Joi.number().required(),
    faritra: Joi.object().required(),
    fiv_name: Joi.string().required(),
    fiv_rang: Joi.number().required(),
    avatar: Joi.string().optional(),
    access_name: Joi.string().required(),
    password: Joi.string().required(),
    primary_color: Joi.string().optional(),
    secondary_color: Joi.string().optional()
});