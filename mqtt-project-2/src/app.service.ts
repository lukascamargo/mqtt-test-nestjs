import { Injectable } from '@nestjs/common';
import {ClientProxyFactory, Transport, ClientProxy} from '@nestjs/microservices';

@Injectable()
export class AppService {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
                url: 'redis://10.214.10.57:6379'
            }
        });
    }
    //a2EuMYiaINaLil1gUtkHBWZP5cb87eVa

    public list() {
        return this.client.send({client: 'clientList'}, {});
    }

    public accumulate(data: number[]) {
        return this.client.send<number, number[]>('sum', data);
    }
 
    public store(data: any) {
        return this.client.send<any, any>('store', data);
    }
}
