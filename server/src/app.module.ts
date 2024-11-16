import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [AuthModule, UsersModule, ImagesModule],
})
export class AppModule {}
