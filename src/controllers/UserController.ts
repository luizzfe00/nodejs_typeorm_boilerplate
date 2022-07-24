import { UserService } from './../services/UserService';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  private userService: UserService = new UserService();

  async all(request: Request, response: Response, next: NextFunction) {
    return response.sendStatus(200);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const id = request.params.id;
    return this.userService.findOne(id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return response.sendStatus(200);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    return response.sendStatus(200);
  }
}
