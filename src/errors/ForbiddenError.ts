import { FORBIDDEN_ERROR } from "../constants/errors.constants";
import { StatusCode } from "../enums/statusCode.enum";
import { CustomError } from "./CustomError";


export class ForbiddenError extends CustomError {
    constructor() {
        super(StatusCode.FORBIDDEN, FORBIDDEN_ERROR);
    }
}
