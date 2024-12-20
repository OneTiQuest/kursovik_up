import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    async signIn(login: string, pass: string): Promise<object> {
        const user = await this.usersService.findByLogin(login);
        if (!user?.pass) throw new UnauthorizedException();

        const isEqual: boolean = await compare(pass, user?.pass);
        if (!isEqual) throw new UnauthorizedException();

        return this._getUserAuth(user);
    }

    async signUp(body: any): Promise<object> {
        const {pass, ...lastBody} = body;

        const salt = await genSalt();
        const passHashed = await hash(pass, salt);

        const user = await this.usersService.create({
            ...lastBody,
            pass: passHashed
        });

        return this._getUserAuth(user);
    }

    private async _getUserAuth(user: any): Promise<any> {
        const token = await this._genToken(user);
        const auth = (await this.jwtService.verifyAsync(token, {secret: jwtConstants.secret}));
        return {
            roles: user.Role.map((role) => role.role),
            access_token: token,
            duration: auth.exp - auth.iat
        };
    }

    private _genToken(user): Promise<string> {
        const payload = {sab: user.id, login: user.login};
        return this.jwtService.signAsync(payload);
    }
}
