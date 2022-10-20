import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
    constructor(@Inject('MQTT_SERVICE') private readonly client: ClientProxy) {}

    @Get('device')
    getDeviceMeasurements() {
        return this.client.send('device', 'Message from client');
    }
}
