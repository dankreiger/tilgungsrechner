import { LIB_PATH } from '@immo/loans/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculationModule } from './calculation/calculation.module';
const lib = join(process.cwd(), LIB_PATH);

@Module({
  imports: [
    CalculationModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [join(lib, 'schemas/**/*.graphql')],
      context: ({ req }) => ({ headers: req.headers }),
      cors: {
        origin: ['http://localhost:4200', 'https://tilgungsrechner.vercel.app'],
        credentials: true,
      },
      playground: true,
      debug: true,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: error?.extensions?.exception?.code || error?.message,
        };
        return graphQLFormattedError;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
