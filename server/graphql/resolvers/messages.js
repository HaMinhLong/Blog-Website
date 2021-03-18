const Message = require("../../models/Message");
const checkAuth = require("../../util/checkAuth");

module.exports = {
  Query: {
    async getMessages() {
      try {
        const messages = await Message.find({}).sort({ createdAt: -1 });
        return messages;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getMessage(_, { messageId }) {
      try {
        const message = Message.findById(messageId);
        if (message) {
          return message;
        } else {
          throw new Error("Message not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async createMessage(_, { email, fullName, phoneNumber, content }, context) {
      const user = checkAuth(context);

      const newMessage = new Message({
        email,
        fullName,
        phoneNumber,
        content,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });
      const message = await newMessage.save();
      return message;
    },
    async deleteMessage(_, { messageId }, context) {
      const user = checkAuth(context);

      try {
        const message = await Message.findById(messageId);
        if ((user.username = message.username)) {
          await message.delete();
          return "Message Deleted Successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
