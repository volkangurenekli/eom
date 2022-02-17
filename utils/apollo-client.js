import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:9002/graphql",
  cache: new InMemoryCache(),
});

export const getEmployeesQuery = client.query({
  query: gql`
    query getEmployees {
      employees {
        id
        firstName
        lastName
        imageURL
        vote
        duty
        email
        adress
        phone
      }
    }
  `,
});
