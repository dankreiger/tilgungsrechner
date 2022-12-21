import { ApolloClient, InMemoryCache } from '@apollo/client';
import { isDevelopment } from '../server';

export const apolloClient = new ApolloClient({
  uri: isDevelopment
    ? 'https://localhost:3333/graphql'
    : 'https://immo-loans-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
