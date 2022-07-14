import { UNAUTHORIZED_ERROR } from '../constants/errors.constants';
import { StatusCode } from '../enums/statusCode.enum';
import { CustomError } from './CustomError';

export class UnauthorizedError extends CustomError {
    constructor() {
        super(StatusCode.UNAUTHORIZED, UNAUTHORIZED_ERROR);
    }
}