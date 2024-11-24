import { Controller, Delete, Get, Param, Post, Req, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
    constructor(
        private readonly imageService: ImagesService
    ) {
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([{name: 'files'}]))
    async addImages(@UploadedFiles() {files}: {files: Express.Multer.File[]}): Promise<void> {
        for (const file of files) {
            await this.imageService.saveImage(file);
        }
    }

    @Get()
    async getAll(): Promise<any> {
        return this.imageService.getAll();
    }
    
    @Get(':code')
    async getOne(@Param('code') code: string, @Res() res: Response) {
        return this.imageService.getPath(code, res);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        return this.imageService.deleteFile(id)
    }
}
