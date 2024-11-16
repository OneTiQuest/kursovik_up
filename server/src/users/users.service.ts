import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: '$2b$14$rIxWWCnSi.qK.amy3FG2.OToq2UalaOIyqy2gQYGYyaZoUsCy97U6',
        },
    ];

    async findByLogin(login: string): Promise<any> {
        return this.users.find(user => user.username === login);
    }

    async create(userData): Promise<boolean> {
        return !!this.users.push(userData);
    }
}
