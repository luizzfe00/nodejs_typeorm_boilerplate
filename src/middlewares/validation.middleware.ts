
import Joi = require('joi');
import { VALIDATION_ERROR } from '../constants/errors.constants';
import { BadRequestError } from '../errors';

export default (schema: Joi.ObjectSchema, property: string) => {
    return (req: any, _: any, next: any) => {
        const { value, error } = schema.validate(req[property], { abortEarly: false });
        if (error) {
            const validationError = new BadRequestError(VALIDATION_ERROR); // error.details
            next(validationError);
        } else {
            req[property] = value;
            next();
        }
    };
};
