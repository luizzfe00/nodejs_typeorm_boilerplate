import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { AppDataSource } from '../utils/data-source';

export class UserService {
  private userRespository: Repository<User> = AppDataSource.getRepository(User);

  async findOne(id: string) {
    return await this.userRespository.findOne({ where: { id } });
  }
}
