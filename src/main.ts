import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { config } from './config/documentation';
import { Logger, ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //documentation with swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //config
  const configService = app.get(ConfigService);
  const port = configService.get('APPLICATION_PORT');
  app.useGlobalPipes(new ValidationPipe());

  //spin up server
  await app.listen(port);
  Logger.log(`server running on ${port}`);

  //hot reload
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
