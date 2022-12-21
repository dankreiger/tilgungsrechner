import { ApolloClient, InMemoryCache } from '@apollo/client';

const isDevelopment = process.env.NODE === 'development';
export const apolloClient = new ApolloClient({
  uri: `http://${
    isDevelopment ? 'localhost:3000' : 'immo-loans-api.herokuapp.com'
  }/graphql`,
  cache: new InMemoryCache(),
});
