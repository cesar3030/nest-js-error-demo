import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [GraphQLModule.forRoot({ 
    autoSchemaFile: 'schema.gql', 
    // debug: true,
    playground: true, 
  }), DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
