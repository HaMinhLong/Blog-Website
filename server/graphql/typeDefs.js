const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    selectedFile: String!
    createdAt: String!
    username: String!
  }
  type Message {
    id: ID!
    email: String!
    fullName: String!
    phoneNumber: String!
    content: String!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    username: String!
    fullName: String!
    token: String!
    createdAt: String!
    # selectedFile: String!
  }
  input RegisterInput {
    email: String!
    fullName: String!
    username: String!
    password: String!
    confirmPassword: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getMessages: [Message]
    getMessage(messageId: ID!): Message
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!

    createPost(title: String!, content: String!, selectedFile: String!): Post!
    deletePost(postId: ID!): String!

    createMessage(
      email: String!
      fullName: String!
      phoneNumber: String!
      content: String!
    ): Message!
    deleteMessage(messageId: ID!): String!
  }
`;
