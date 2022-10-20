import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('mqtt')
export class MqttController {
    @MessagePattern('device')
    getDeviceMeasurements(@Payload() data) {
        console.log(data);
        return data;
    }
}
