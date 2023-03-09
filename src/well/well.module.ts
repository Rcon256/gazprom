import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WellController } from './well.controller';
import { WellEntity } from './well.entity';
import { WellService } from './well.service';

@Module({
  controllers: [WellController],
  providers: [WellService],
  imports: [TypeOrmModule.forFeature([WellEntity]),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'gazprom',
    username: 'postgres',
    password: '123',
    entities: [WellEntity],
    synchronize: true
  })]
})
export class WellModule {}
