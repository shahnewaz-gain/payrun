import { setContext } from '@apollo/client/link/context';
import { getAccessToken } from '@/utils';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from cookies if it exists
  const publicToken = process.env.NEXT_PUBLIC_API_TOKEN;
  const accessToken = getAccessToken() || publicToken;

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`
    }
  };
});

export default authLink;
