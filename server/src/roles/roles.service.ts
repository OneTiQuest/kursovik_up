import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolesService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async getAll(): Promise<object[]> {
        return this.prismaService.role.findMany();
    }

    async delete(id: number): Promise<Pick<User, any>> {
        return this.prismaService.navigation.delete({
            where: {
                id,
                NOT: [{name: 'admin'}, {name: 'guest'}]
            }
        });
    }
}
