import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() body: any): Promise<string> {
        return this.authService.signIn(body.login, body.password);
    }


    @HttpCode(HttpStatus.OK)
    @Post('registry')
    async signUp(@Body() body: any): Promise<boolean> {
        return this.authService.signUp(body);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        return req.user;
    }
}
