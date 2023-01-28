export const graphqlUrl =
  process.env.NODE_ENV === "production"
    ? "https://madebycommon-server.herokuapp.com/api/graphql"
    : "http://0.0.0.0:3000/api/graphql";
