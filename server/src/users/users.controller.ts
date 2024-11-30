import { Body, Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Get('/')
    getAll() {
        return this.usersService.getAll();
    }

    @Delete()
    delete(@Body() body: any) {
        return this.usersService.delete(body.id);
    }
}
