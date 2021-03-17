const { model, Schema } = require("mongoose");

const messageSchema = new Schema({
  email: String,
  fullName: String,
  phoneNumber: String,
  content: String,
  username: String,
  createAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Message = model("Message", messageSchema);

module.exports = Message;
