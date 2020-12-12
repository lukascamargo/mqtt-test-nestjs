import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport, ClientOptions } from '@nestjs/microservices';

const logger = new Logger('Main');

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.REDIS,
        options: {
            host: '10.214.10.57',
            port: 6379,
            // url: 'redis://:a2EuMYiaINaLil1gUtkHBWZP5cb87eVa@redis-18037.c90.us-east-1-3.ec2.cloud.redislabs.com:18037',
        }
    });
    app.listen(() => logger.log('Microservice is listening'));
}

bootstrap().catch(console.error);
