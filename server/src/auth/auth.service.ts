import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import {compare, hash, genSalt} from "bcrypt";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async signIn(login: string, pass: string): Promise<any> {
        const user = await this.usersService.findByLogin(login);
        if (!user?.password) throw new UnauthorizedException();

        const isEqual: boolean = await compare(pass, user?.password)
        if (!isEqual) throw new UnauthorizedException();

        const { password, ...result } = user;

        const payload  = {sab: user.id, login};
        return {
            access_tocen: await this.jwtService.signAsync(payload)
        };
    }

    async signUp(body: any): Promise<boolean> {
        const {password, ...lastBody} = body;

        const salt = await genSalt();
        const passHashed = await hash(password, salt);

        return this.usersService.create({
            ...lastBody, 
            password: passHashed
        });
    }
}
