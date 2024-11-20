import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client'

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {
    }

    findByLogin(login: string): Promise<Pick<User, any>> {
        return this.prismaService.user.findFirst({
            where: {
                login: login
            },
            include: {Role: true}
        });
    }

    async create(userData: any): Promise<Pick<User, any>> {
        const hasUsers = await this.prismaService.user.findFirst();

        // TODO: Первому регистрируемому пользователю выдаются роль админа
        if (!hasUsers) {
            return this.prismaService.user.create({
                data: {
                    ...userData,
                    Role: {create: {role: {connect: {id: 1}}}}
                },
                include: {
                    Role: {
                        select: {
                            role: true
                        }
                    }
                }
            });
        }

        return this.prismaService.user.create({
            data: {
                ...userData,
                Role: {create: {role: {connect: {id: 2}}}}
            },
            include: {
                Role: {
                    select: {
                        role: true
                    }
                }
            }
        });
    }

    async getAll(): Promise<Pick<User, any>[]> {
        return this.prismaService.user.findMany({
            include: {
                Role: {
                    select: {role: true}
                }
            }
        });
    }
}
