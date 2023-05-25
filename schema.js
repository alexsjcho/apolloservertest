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

  type Mutation {
    createUser(name: String!, company: String!, married: Boolean!): User!
  }
`;

module.exports = typeDefs;
