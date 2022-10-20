import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { config } from 'dotenv';
import { AppModule } from './app.module';

config();

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.MQTT,
        options: {
            url: process.env.MQTT_BROKER_URL,
        },
    });
    await app.listen();
}
bootstrap();
