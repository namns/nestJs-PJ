import {Controller, Post, Body, Get, Put, Delete, Param, Query, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';
import * as bcrypt from 'bcrypt';
// import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('users')
// @UseGuards(JwtAuthGuard)
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    findAll(@Query() query) {
        return this.service.get(query);
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    async create(@Body() user: User) {
        const saltOrRounds = 10;
        user.password = await bcrypt.hash(user.password, saltOrRounds);
        return this.service.createUser(user);
    }

    @Put(':id')
    update(@Param() params, @Body() user: User) {
        return this.service.updateUser(params.id, user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}