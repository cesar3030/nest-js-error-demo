import { Controller, Get } from '@nestjs/common';
import { Dog } from './dog.model';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {

  constructor(private readonly dogsService: DogsService) {}

  @Get('')
  findAll(): Dog[] {
    throw new Error('an error');
    return this.dogsService.findAll();
  }
}
