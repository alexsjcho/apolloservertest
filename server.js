const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(
      `Server running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer().catch((err) => {
  console.error(err);
});
