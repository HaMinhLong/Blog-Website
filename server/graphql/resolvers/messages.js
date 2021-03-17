const Message = require("../../models/Message");

module.exports = {
  Query: {
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
