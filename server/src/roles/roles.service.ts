import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolesService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAll(): Promise<object[]> {
        return this.prismaService.role.findMany()
    }
}
