import { Module } from '@nestjs/common';
import * as controllers from 'src/controllers'
import * as services from 'src/services'

@Module({
  imports: [],
  controllers: [controllers.AppController],
  providers: [services.AppService],
})
export class AppModule {}
