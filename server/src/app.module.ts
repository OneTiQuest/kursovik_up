import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ImagesModule } from './images/images.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { NavigationModule } from './navigation/navigation.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [AuthModule, UsersModule, ImagesModule, RolesModule, NavigationModule]
})
export class AppModule {
}
