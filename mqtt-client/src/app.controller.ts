import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy, MqttRecordBuilder } from '@nestjs/microservices';

@Controller()
export class AppController {
    constructor(@Inject('MQTT_SERVICE') private readonly client: ClientProxy) {}

    @Get('/send/:serial')
    sendTemperature(@Param('serial') serial: string) {
        const data = {
            time: new Date().toISOString(),
            value: Math.floor(Math.random() * 10),
        };

        const record = new MqttRecordBuilder(data).setQoS(1).build();
        return this.client.send(`device/${serial}/temperature`, record);
    }
}
