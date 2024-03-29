import { gql } from "graphql-request";

const PostFieldsFragment = gql`
  fragment PostFieldsFragment on Post {
    title
    content
    slug

    createdAt
    updatedAt

    author {
      name
    }

    meta {
      title
      description
      image {
        sizes {
          thumbnail {
            url
            filename
            height
            width
          }
          wideThumbnail {
            url
            filename
            height
            width
          }
          tallThumbnail {
            url
            filename
            height
            width
          }
          largeThumbnail {
            url
            filename
            height
            width
          }
        }
      }
    }
  }
`;

export const getPostSlugsQuery = gql`
  query postsQuery {
    Posts {
      docs {
        slug
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

export const getPostsPreviewQuery = gql`
  query postsQuery {
    Posts(limit: 2) {
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
