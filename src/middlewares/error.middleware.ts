import { NextFunction, Request, Response } from 'express'
import { AN_ERROR_OCCURRED } from '../constants/errors.constants';
import { CustomError } from '../errors/CustomError';

function errorMiddleware(error: CustomError, _request: Request, response: Response, _next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || AN_ERROR_OCCURRED;
    response
        .status(status)
        .send({
            status,
            message,
        });
}

export default errorMiddleware;