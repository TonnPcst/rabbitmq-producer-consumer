import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RmqModule } from './resources/rmq/rmq.module';
import { ProducerModule } from './resources/producer/producer.module';

@Module({
  imports: [RmqModule, ProducerModule],
  controllers: [AppController],
})
export class AppModule {}
