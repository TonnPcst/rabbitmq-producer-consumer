import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('consumer')
export class ConsumerController {
  @EventPattern('consumer_pattern')
  async handleMessage(data: Record<string, unknown>) {
    console.log('Received message', data);
  }
}
