import { NextFunction, Request, Response } from "express"
import { User } from "../entities/User"
import HTTPException from "../exceptions/HttpException"
import { AppDataSource } from "../utils/data-source"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne({ where: { id: request.params.id } })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
        if (!userToRemove) 
            throw new HTTPException(400, 'User not found');
        
        await this.userRepository.remove(userToRemove);
        return;
    }

}