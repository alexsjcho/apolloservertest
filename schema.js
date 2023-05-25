const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int!
    first_name: String!
    last_name: String!
    married: Boolean!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
  }
`;

module.exports = typeDefs;
