const BlogPost = require("../models/blog");



const createNewBlog = async (req, res) => {
    const { title, content, author, userId } = req.body;
    const image = req.file.path;
   console.log(title, content, author, userId, image)
    try {
      const blogPost = await BlogPost.create({ image,title, content, author, userId });
      res.status(200).json(blogPost);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

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
  }; 