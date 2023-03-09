import { NestApplicationOptions } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import * as modules from 'src/modules'
import * as fs from 'fs'

const nestOptions: NestApplicationOptions = {
  httpsOptions: {
    key: fs.readFileSync('./secrets/server/server.key'),
    cert: fs.readFileSync('secrets/server/server.crt'),
    ca: fs.readFileSync('./secrets/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false,
  },
}

async function bootstrap() {
  const app = await NestFactory.create(modules.AppModule, nestOptions);
  await app.listen(3000);
}
bootstrap();
