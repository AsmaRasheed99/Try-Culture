const BlogPost = require("../models/blog");

const getBlog = async (req, res) => {

  const id = req.params.id;
  console.log(id)
  try {
    const users = await BlogPost.findById(id);
    res.status(200).json(users);
    console.log(users)
  }
 
  catch (error) {
    res.status(500).json({ error: error.message });
  }

}

const createNewBlog = async (req, res) => {
    const { title, content, author, userId, UserImage, comments , likes } = req.body;
    const image = req.file.path;
   console.log(title, content, author, userId, image, UserImage)
    try {
      const blogPost = await BlogPost.create({ image,title, content, author, userId , UserImage, comments , likes});
      res.status(200).json(blogPost);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const Comments = async (req, res) => {
    const blogId = req.params.id;
    const {NewComment} = req.body;
    const Comment = await BlogPost.findByIdAndUpdate(blogId, {comments :NewComment });
   
    res.json(Comment);


  }
 
  const deleteComment = async (req, res) => {
    const blogId = req.params.id;
    const {oldComments} = req.body;
    console.log(oldComments);
    const Comment = await BlogPost.findByIdAndUpdate(blogId, {comments :oldComments });
   
    res.json(Comment);


  }



  const Likes = async (req, res) => {
    const blogId = req.params.id;
    const {Likes} = req.body;

    console.log(blogId , Likes)
    const like = await BlogPost.findByIdAndUpdate(blogId, {likes : Likes})
    
    res.json(like);
  }

  const getAllBlogs = async (req, res, next) => {
    try {
      const users = await BlogPost.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const allUserBlogs = async (req, res) => {
    const userId = req.params.id;
    try {
      const userBlogs = await BlogPost.find({ userId: userId }); 
      res.status(200).json(userBlogs); 
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' }); 
    }
  };
  const oneUserBlogs = async (req, res) => {

    const blogId = req.params.id;
    const {title , content } = req.body;
    const image = req.file.path;

    const blog = await BlogPost.findByIdAndUpdate(blogId, {title :title, content:content, image:image });
    console.log(blog)
    res.json(blog);



  };
  

 const deleteBlog = async (req, res ) => {
 
  const blogId = req.params.id;

  const deletedBlog = await BlogPost.findByIdAndDelete(blogId);
  res.json(deletedBlog);

 }

    

  module.exports = {
    createNewBlog,
    getAllBlogs,
    allUserBlogs,
    oneUserBlogs,
    deleteBlog,
    getBlog,
    Comments,
    Likes,
    deleteComment
  }; 