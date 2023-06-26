const BlogPost = require("../models/blog");



const createNewBlog = async (req, res) => {
    const { image, title, content, author, date, userId } = req.body;
    try {
      const blogPost = await BlogPost.create({ image,title, content, author,date, userId });
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
    const updatedBlogData = req.body;
    console.log(updatedBlogData)

    // updatedUserData.password= await bcrypt.hash(updatedUserData.password, 5)
    const blog = await BlogPost.findByIdAndUpdate(blogId, updatedBlogData, { new: true });
    const updatedblog = await blog.save();
    console.log(blog)
    res.json(updatedblog);



  };
  



    

  module.exports = {
    createNewBlog,
    getAllBlogs,
    allUserBlogs,
    oneUserBlogs,
  }; 