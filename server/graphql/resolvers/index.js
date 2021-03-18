const postsResolvers = require("./posts");
const messagesResolvers = require("./messages");
const commentsResolvers = require("./comments");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...postsResolvers.Query,
    ...messagesResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...messagesResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
    ...messagesResolvers.Subscription,
  },
};
