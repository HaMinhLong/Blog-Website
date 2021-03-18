const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    selectedFile: String!
    comments: [Comment]!
    views: [View]!
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
  type Comment {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }
  type View {
    id: ID!
    username: String!
    createdAt: String!
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

    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!

    viewPost(postId: ID!): Post!
  }
  type Subscription {
    newPost: Post!
    newMessage: Message!
  }
`;
