import { gql } from "@apollo/client";

export const ANIME = gql`
  query SearchAnime($search: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, type: ANIME) {
        id
        description(asHtml: true)
        episodes
        averageScore
        coverImage {
          large
        }
        genres

        favourites
        popularity
        type
      }
    }
  }
`;
