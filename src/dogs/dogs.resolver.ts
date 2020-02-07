import { DogsService } from './dogs.service';
import { Dog } from './dog.model';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Authorized } from 'type-graphql';

@Resolver(of => Dog)
export class DogsResolver {
  constructor(private readonly dogsService: DogsService) {}

  @Authorized()
  @Query(returns => [Dog])
  async dogs() {
    return this.dogsService.findAll();
  }

  @Authorized()
  @Mutation(returns => Dog)
  async updateDog(@Args('name') name: string, @Args('age') age: number) {
    const dogArr = this.dogsService.findAll().filter(d => d.name === name);
    if (dogArr.length > 0) {
      const dog = dogArr[0];
      dog.age = age;
      return dog;
    }
  }
}
