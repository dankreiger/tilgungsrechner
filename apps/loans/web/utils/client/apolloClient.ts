import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/graphql'
      : 'https://immo-loans-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
