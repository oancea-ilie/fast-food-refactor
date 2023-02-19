import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

config();
const server = async () => {
  const port = process.env.SERVER_PORT || 4000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // origin: 'http://localhost',
    // credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  console.log(`SERVER IS RUNNING ON PORT ${port}!`);
};
server();
