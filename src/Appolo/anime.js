import { gql } from "@apollo/client";

export const ANIME = gql`
  query SearchAnime($search: String) {
    Page(page: 1, perPage: 10) {
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
`;
