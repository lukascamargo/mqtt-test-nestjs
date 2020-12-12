import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitService } from './rabbit/rabbit.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly rabbitService: RabbitService,) {}

    @Get('list')
    sum() {
        const list = this.appService.list();

        return list;
    }

    @Post('store')
    store(@Body() data: any) {
        return this.appService.store(data);
    }

    @Post('save')
    save(@Body() data:any) {
        return this.rabbitService.save(data);
    }
}
