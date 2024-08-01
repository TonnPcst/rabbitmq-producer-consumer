import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const rabbitConfig: MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://guest:guest@localhost:5672'],
    queue: 'consumer_queue',
    queueOptions: {
      durable: true,
    },
  },
};
