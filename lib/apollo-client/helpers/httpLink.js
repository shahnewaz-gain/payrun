import { createHttpLink } from '@apollo/client';
import { getApiBaseUrl } from '@/utils';

const httpLink = createHttpLink({
  uri: `${getApiBaseUrl()}/graphql`
});

export default httpLink;
