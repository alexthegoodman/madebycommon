import { gql } from "graphql-request";

export const getPostsQuery = gql`
  query postsQuery($page: Int) {
    Posts(page: $page, limit: 3) {
      page
      docs {
        title
        content
        slug
        meta {
          title
          description
          image {
            filename
            url
          }
        }
      }
    }
  }
`;
