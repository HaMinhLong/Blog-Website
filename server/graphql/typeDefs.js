const { gql } = require("apollo-server");

module.exports = gql`
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
    getMessages: [Message]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;