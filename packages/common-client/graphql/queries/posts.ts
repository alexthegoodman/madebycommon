import { gql } from "graphql-request";

const PostFieldsFragment = gql`
  fragment PostFieldsFragment on Post {
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
`;

export const getPostsQuery = gql`
  query postsQuery($page: Int) {
    Posts(page: $page, limit: 3) {
      page
      docs {
        ...PostFieldsFragment
      }
    }
  }
  ${PostFieldsFragment}
`;

export const getPostQuery = gql`
  query postQuery($slug: String!) {
    Posts(where: { slug: { equals: $slug } }) {
      docs {
        ...PostFieldsFragment
      }
    }
  }
  ${PostFieldsFragment}
`;
