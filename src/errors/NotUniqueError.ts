import { ENTITY_NOT_UNIQUE } from '../constants/errors.constants';
import { StatusCode } from '../enums/statusCode.enum';
import { CustomError } from './CustomError';

export class NotUniqueError extends CustomError {
    constructor() {
        super(StatusCode.NOT_UNIQUE, ENTITY_NOT_UNIQUE);
    }
}
