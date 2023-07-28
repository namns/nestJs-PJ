import {Injectable, HttpException, HttpStatus, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async get(params: object): Promise<User[]> {
        return await this.usersRepository.find({where: [params]});
    }

    async getUserByEmail(email: string) {
        return await this.usersRepository.findOneBy({email});
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["name", "email", "created_at"],
            where: [{ "id": _id }]
        });
    }

    async createUser(user: User) {
        return this.usersRepository.save(user)
    }

    async updateUser(id, user: User) {
        let userInfo = this.getUser(id);

        userInfo.then(value => {
            if (value.length === 0) {
                throw new HttpException('user not found', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
        return this.usersRepository.update(id, user)
    }

    async deleteUser(user: User) {
        return this.usersRepository.delete(user);
    }
}