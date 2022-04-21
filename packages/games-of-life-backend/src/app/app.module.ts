import { Board } from '@monorepo2/games-of-life';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Board],
})
export class AppModule {}
