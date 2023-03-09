import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WellModule } from './well/well.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { WellEntity } from './well/well.entity';

@Module({
  imports: [WellModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
