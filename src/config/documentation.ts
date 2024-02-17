import { DocumentBuilder } from '@nestjs/swagger';

//documentation config
export const config = new DocumentBuilder()
  .setDescription('HR Management Software')
  .setTitle('HR Management Software')
  .addTag('HRMS')
  .setVersion('1.0')
  .build();
