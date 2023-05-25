const { users } = require('./users');

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },
};

module.exports = resolvers;
