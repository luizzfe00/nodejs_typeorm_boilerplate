import { ENTITY_NOT_FOUND } from '../constants/errors.constants';
import { StatusCode } from '../enums/statusCode.enum';
import { CustomError } from './CustomError';

export class NotFoundError extends CustomError {
  constructor() {
    super(StatusCode.NOT_FOUND, ENTITY_NOT_FOUND);
  }
}
