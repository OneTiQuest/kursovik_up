import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NavigationService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAll() {
        return this.prismaService.navigation.findMany();
    }

    async delete(id: number): Promise<Pick<User, any>> {
        return this.prismaService.navigation.delete({where: {id}});
    }
}
