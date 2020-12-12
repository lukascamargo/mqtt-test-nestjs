"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const logger = new common_1.Logger('Main');
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.REDIS,
        options: {
            host: '10.214.10.57',
            port: 6379,
        }
    });
    app.listen(() => logger.log('Microservice is listening'));
}
bootstrap().catch(console.error);
//# sourceMappingURL=main.js.map