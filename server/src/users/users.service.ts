import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {
    }

    findByLogin(login: string): Promise<any> {
        return this.prismaService.user.findFirst({
            where: {
                login: login
            },
            include: {Role: true}
        });
    }

    async create(userData: any): Promise<object> {
        const hasUsers = await this.prismaService.user.findFirst();
        console.log(hasUsers);
        return this.prismaService.user.create({
            data: {
                ...userData,
                Role: {connect: {role: {id: 2}}}
            },
            include: {
                Role: true
            }
        });
    }

    async getAll(): Promise<any> {
        return this.prismaService.user.findMany({
            include: {
                Role: {
                    include: {role: true}
                }
            }
        });
    }
}
