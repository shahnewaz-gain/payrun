import { createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_TOKEN}/graphql`,
});

export default httpLink;
