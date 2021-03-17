const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Post = require("./models/Post");
const Message = require("./models/Message");

const { MONGODB } = require("./config");

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    selectedFile: String!
    createAt: String!
    username: String!
  }
  type Message {
    id: ID!
    email: String!
    fullName: String!
    phoneNumber: String!
    content: String!
    createAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
    getMessages: [Message]
  }
`;

const resolvers = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find({});
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getMessages() {
      try {
        const messages = await Message.find({});
        return messages;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
