import { Module } from '@nestjs/common';
import { DogsResolver } from './dogs.resolver';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
  providers: [DogsResolver, DogsService],
  controllers: [DogsController]
})
export class DogsModule {}
