import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class RabbitService {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://127.0.0.1:5672'],
                queue: 'cats_queue',
                queueOptions: {
                    durable: true,
                },
                noAck: false
            }
        });
    }
    //a2EuMYiaINaLil1gUtkHBWZP5cb87eVa

    public save(data: any) {
        return this.client.emit('notifications', data);
    }

    public accumulate(data: number[]) {
        return this.client.send<number, number[]>('sum', data);
    }
 
    public store(data: any) {
        return this.client.send<any, any>('store', data);
    }
}
