import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

function init() {
  // Для успешного парсинга идентификаторов prisma
  BigInt.prototype['toJSON'] = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
  };
}

async function bootstrap() {
  init();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_SERVER ?? 3001);
}
bootstrap();
