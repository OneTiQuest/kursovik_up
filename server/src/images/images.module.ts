import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaModule } from '../prisma/prisma.module';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
    imports: [
        MulterModule.register({dest: './uploads'}),
        PrismaModule
    ],
    controllers: [ImagesController],
    providers: [ImagesService]
})
export class ImagesModule {
}
