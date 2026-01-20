import { gql } from "@apollo/client";

export const ANIME = gql`
  query SearchAnime($search: String) {
    Page(page: 1, perPage: 1) {
      media(search: $search, type: ANIME) {
        id
        title {
          english
        }
        description(asHtml: false)
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
