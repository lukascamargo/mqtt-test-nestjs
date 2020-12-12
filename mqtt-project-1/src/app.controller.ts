import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
    private logger = new Logger('AppController');

    @MessagePattern('sum')
    accumulate(data: number[]): number {
        this.logger.log(`adding ${data.toString()}`);
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }
}
