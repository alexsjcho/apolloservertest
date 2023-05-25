const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String!
    company: String!
    married: Boolean!
  }

  type Query {
    getAllUsers: [User!]!
  }
`;

module.exports = typeDefs;
