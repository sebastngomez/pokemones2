
import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    PORT:Joi.number().default(),
    MONGODB:Joi.required(),
    DEFAULT_LIMIT:Joi.number().default(8),
})