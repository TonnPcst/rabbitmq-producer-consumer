import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProducerService } from './producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'consumer',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'consumer_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export class ProducerModule {}
