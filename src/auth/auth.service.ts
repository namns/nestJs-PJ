import {Injectable, UnauthorizedException} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.getUserByEmail(email);

        const check = await bcrypt.compare(password, user.password);

        if (!user || !check) {
            return false;
        }

        return user;
    }
    async login(user: any) {

        const data = await this.validateUser(user.email, user.password)
        if (data == false) {
            throw new UnauthorizedException('login error')
        }

        return {
            access_token: this.jwtService.sign({ email: data.email, id: data.id, name:data.name }),
        };
    }
}
