import { Controller, Get, Request } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {
    }

    @Get()
    async getRoles(@Request() req) {
        return this.rolesService.getAll();
    }
}
