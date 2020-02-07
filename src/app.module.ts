import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { DogsModule } from './dogs/dogs.module';
import { TypeGraphQLBuildSchemaOptions } from './type-graphql-build-schema-options.interface';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      // debug: true,
      playground: true,
      buildSchemaOptions: {
        authChecker: () => {
          console.log('authChecker');
          return false;
        },
      } as TypeGraphQLBuildSchemaOptions,
    }),
    DogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
