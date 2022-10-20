import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from 'dotenv';
import { AppController } from './app.controller';

config();

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MQTT_SERVICE',
                transport: Transport.MQTT,
                options: {
                    url: process.env.MQTT_BROKER_URL,
                },
            },
        ]),
    ],
    controllers: [AppController],
})
export class AppModule {}
