import { Module } from '@nestjs/common';
import { MqttModule } from './modules/mqtt/mqtt.module';

@Module({
    imports: [MqttModule],
})
export class AppModule {}
