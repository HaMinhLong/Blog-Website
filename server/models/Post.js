const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  title: String,
  content: String,
  selectedFile: String,
  username: String,
  createAt: String,
  comments: [
    {
      body: String,
      username: String,
      createAt: String,
    },
  ],
  views: [
    {
      username: String,
      createAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
