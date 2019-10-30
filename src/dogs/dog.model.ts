import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Dog {
  constructor(name: string) {
    this.name = name;
    this.breed = 'portugese water dog'
  }

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  breed?: string;
}