import { Body, Controller, Delete, Get } from '@nestjs/common';
import { NavigationService } from './navigation.service';

@Controller('navigation')
export class NavigationController {
    constructor(private readonly navigationService: NavigationService) {}

    @Get()
    getAll() {
        return this.navigationService.getAll();
    }

    @Delete()
    delete(@Body() body: any) {
        return this.navigationService.delete(body.id);
    }
}
