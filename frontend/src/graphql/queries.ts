import gql from "graphql-tag";

export const ME_QUERY = gql`
  {
    me {
      _id
      name
      email
      picture
    }
  }
`;

export const GET_PINS_QUERY = gql`
  {
    getPins {
      _id
      createdAt
      title
      image
      content
      latitude
      longitude
      author {
        _id
        name
        email
        picture
      }
      comments {
        text
        createdAt
        author {
          _id
          name
          picture
        }
      }
    }
  }
`;

export const IS_AUTH = gql`
  query isUserAuth {
    isAuth @client
  }
`;

export const GET_USER = gql`
  query getUser {
    me @client {
      picture
      name
    }
  }
`;
