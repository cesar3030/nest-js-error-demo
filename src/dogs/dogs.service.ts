import { Injectable } from '@nestjs/common';
import { Dog } from './dog.model';

@Injectable()
export class DogsService {
  public findAll(): Dog[] {
    return [new Dog('Foo'), new Dog('Bar')];
  }
}
