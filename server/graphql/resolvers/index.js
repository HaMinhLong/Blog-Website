const postsResolvers = require("./posts");
const messagesResolvers = require("./messages");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...postsResolvers.Query,
    ...messagesResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
