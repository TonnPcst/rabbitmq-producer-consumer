import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RmqModule } from './resources/rmq/rmq.module';
import { ConsumerModule } from './resources/consumer/consumer.module';

@Module({
  imports: [RmqModule, ConsumerModule],
  controllers: [AppController],
})
export class AppModule {}
