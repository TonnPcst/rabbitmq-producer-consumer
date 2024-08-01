import { Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

interface ProducerMessage {
  title: string;
  content: string;
}

@Injectable()
export class ProducerService {
  private client: ClientProxy;
  constructor(@Inject('consumer') private readonly Consumer: ClientProxy) {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@localhost:5672'],
        queue: 'consumer_queue',
        queueOptions: {
          durable: true,
        },
      },
    });

    this.client
      .connect()
      .then(() => {
        console.log(
          ` ############################ \n  * 🚀 connected to rmq 🚀 *\n ############################ \n`,
        );
      })
      .catch((err) => {
        console.log(
          ` ############################ \n  * 🚀 failed to connect to rmq 🚀 *\n ############################ \n`,
          err,
        );
      });
  }

  async sendMessage(message: ProducerMessage) {
    if (!message.title || !message.content) {
      throw new Error('title and content are required');
    }
    this.Consumer.send('consumer_pattern', message).toPromise();
    return 'message sent';
  }
}
