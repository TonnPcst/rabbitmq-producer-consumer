import { Body, Controller, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private producerService: ProducerService) {}

  @Post('send')
  async sendMessage(@Body() message: any) {
    return this.producerService.sendMessage(message);
  }
}
