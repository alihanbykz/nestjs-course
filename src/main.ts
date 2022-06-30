import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AllExceptionFilter } from 'libs/filters/all-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost); 
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter)); // Global Filter ekledik
  app.setGlobalPrefix('api'); //localhost:3000/api/user
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
