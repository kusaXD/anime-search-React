import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://graphql.anilist.co" }),
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query SearchAnime($search: String, $page: Int = 1, $perPage: Int = 10) {
      Page(page: $page, perPage: $perPage) {
        media(search: $search, type: ANIME) {
          id
          title {
            english
          }
          description
          episodes
          averageScore
          coverImage {
            large
            medium
          }
          genres
          studios {
            nodes {
              name
            }
          }
          endDate {
            day
            month
            year
          }
        }
      }
    }
  `,
});

export default client;
