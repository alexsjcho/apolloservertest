const { users } = require('./users.js');

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },
};

module.exports = resolvers;
