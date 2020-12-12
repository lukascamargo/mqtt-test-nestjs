import { AppService } from './app.service';
import { RabbitService } from './rabbit/rabbit.service';
export declare class AppController {
    private readonly appService;
    private readonly rabbitService;
    constructor(appService: AppService, rabbitService: RabbitService);
    sum(): import("rxjs").Observable<any>;
    store(data: any): import("rxjs").Observable<any>;
    save(data: any): import("rxjs").Observable<any>;
}
