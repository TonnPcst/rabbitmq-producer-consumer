import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { RmqService } from './resources/rmq/rmq.service';
import { MicroserviceOptions } from '@nestjs/microservices';

config();
async function main() {
  const app = await NestFactory.create(AppModule);

  const rmqService = app.get<RmqService>(RmqService);

  app.connectMicroservice<MicroserviceOptions>(
    rmqService.getOptions('producer_queue'),
  );

  await app.startAllMicroservices();

  await app.listen(process.env.PORT);
  console.log(
    ` ################################################################ \n  * 🚀 Application is running on: http://127.0.0.1:${process.env.PORT}/api 🚀 *\n ################################################################\n`,
  );
}
main();
