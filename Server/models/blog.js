const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const blogPostSchema = new Schema({
  image: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
      required : true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // flag: {
  //   type: Boolean,
  //   default: false,
  // }
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;