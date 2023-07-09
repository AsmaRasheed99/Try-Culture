const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const blogPostSchema = new Schema({
  image: {
    type: String,
    required: false,
  },
  UserImage: {
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
    required:false
  },
  
   
  // flag: {
  //   type: Boolean,
  //   default: false,
  // }
},

{timestamps : true}

);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;