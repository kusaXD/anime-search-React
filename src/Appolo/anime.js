import { gql } from "@apollo/client";

export const ANIME = gql`
  query SearchAnime($search: String, $page: Int = 1, $perPage: Int = 10) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, type: ANIME) {
        id
        title {
          english
        }
        description(asHtml: true)
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
        favourites
        popularity
        type
      }
    }
  }
`;
