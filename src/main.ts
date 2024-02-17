import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { config } from './config/documentation';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //documentation with swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //spin up server
  const port = app.get(ConfigService).get('APPLICATION_PORT');
  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
