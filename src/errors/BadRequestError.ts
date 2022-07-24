import { StatusCode } from '../enums/statusCode.enum';
import { CustomError } from './CustomError';

export class BadRequestError extends CustomError {
  constructor(message: any) {
    super(StatusCode.BAD_REQUEST, message);
  }
}
