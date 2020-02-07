import { Field, ObjectType, Authorized, Float } from 'type-graphql';

@ObjectType()
export class Dog {
  constructor(name: string) {
    this.name = name;
    this.breed = 'portugese water dog';
  }

  // @Authorized()
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  breed?: string;

  @Field(type => Float, { nullable: true })
  age?: number;
}
