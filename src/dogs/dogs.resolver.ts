import { DogsService } from './dogs.service';
import { Dog } from './dog.model';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

@Resolver(of => Dog)
export class DogsResolver {

  constructor(private readonly dogsService: DogsService) {}

  @Query(returns => [Dog])
  async dogs() {
    throw new Error('an error');
    return this.dogsService.findAll(); 
  }
}
