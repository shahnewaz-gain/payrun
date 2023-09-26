import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import AuthLink from '@/lib/apollo-client/helpers/authLink';
import ErrorLink from '@/lib/apollo-client/helpers/errorLink';
import HttpLink from '@/lib/apollo-client/helpers/httpLink';

const client = new ApolloClient({
  link: from([AuthLink, ErrorLink, HttpLink]),
  cache: new InMemoryCache()
});

export default client;
