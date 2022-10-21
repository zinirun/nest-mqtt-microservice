import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload, RpcException } from '@nestjs/microservices';
import { Measurement } from './interfaces';

@Controller('mqtt')
export class MqttController {
    @MessagePattern('device/+/temperature')
    getDeviceMeasurements(@Payload() data: Measurement, @Ctx() context: MqttContext) {
        if (!(data.time && data.value)) {
            throw new RpcException('invalid data format');
        }

        const topic = context.getTopic();
        const [_, serial, type] = topic.split('/');
        console.log(`[${data.time}] ${serial}: ${data.value}`);

        return { serial, type, ...data };
    }
}
