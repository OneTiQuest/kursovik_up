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

    async signIn(login: string, pass: string): Promise<object> {
        const user = await this.usersService.findByLogin(login);
        if (!user?.password) throw new UnauthorizedException();

        const isEqual: boolean = await compare(pass, user?.password)
        if (!isEqual) throw new UnauthorizedException();

        const { password, ...result } = user;

        return {
            role: '',
            access_token: this._genToken(user)
        };
    }

    async signUp(body: any): Promise<object> {
        const {pass, ...lastBody} = body;

        const salt = await genSalt();
        const passHashed = await hash(pass, salt);

        const user = await this.usersService.create({
            ...lastBody,
            pass: passHashed
        });

        return {
            role: '',
            access_token: this._genToken(user)
        }
    }

    private async _genToken(user) {
        const payload  = {sab: user.id, login: user.login};
        return this.jwtService.signAsync(payload);
    }
}
