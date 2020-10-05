const { ApolloServer } = require('apollo-server');
const path = require('path');
const typeDefs = require(path.resolve('src/schema.js'));
const resolvers = require(path.resolve('src/resolvers'));
const SchoolDb = require(path.resolve('src/db'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { SchoolDb };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
