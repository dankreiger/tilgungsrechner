import { ApolloClient, InMemoryCache } from '@apollo/client';

const isDevelopment = process.env.NODE_ENV === 'development';
export const apolloClient = new ApolloClient({
  uri: `http://${
    isDevelopment ? 'localhost:3333' : 'immo-loans-api.herokuapp.com'
  }/graphql`,
  cache: new InMemoryCache(),
});
