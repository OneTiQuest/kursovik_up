import { Injectable, Res } from '@nestjs/common';
import { Statuses } from '@prisma/client';
import { Express, Response } from 'express';
import * as fs from 'node:fs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ImagesService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async saveImage(file: Express.Multer.File) {
        await this.prismaService.image.create({
            data: {
                code: file.filename,
                extension: file.mimetype.split('/')?.[1],
                path: file.path,
                status: Statuses.ACTIVE
            }
        });
    }

    /**
     * Возвращает пути до файлов
     */
    async getAll() {
        const images = await this.prismaService.image.findMany();
        return images.map((image) => {
            return {
                id: image.id,
                path: 'http://localhost:3001' + '/images/' + image.code
            };
        });
    }

    async deleteFile(id: number): Promise<boolean> {
        const image = await this.prismaService.image.delete({where: {id}});
        fs.rmSync('./uploads/' + image.code, {force: true});
        return true;
    }

    /**
     * Возвращает файл с сервера по коду
     * @param code
     * @param res
     */
    async getPath(code: string, @Res() res: Response): Promise<any> {
        const file = await this.prismaService.image.findFirstOrThrow({where: {code}});
        res.sendFile(file.path, {root: './'});
    }
}
