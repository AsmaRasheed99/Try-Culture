const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const { uploadSingle } = require('../middleware/handleImage');



router.get("/api/getAllBlogs", blogController.getAllBlogs);
router.get("/api/allUserBlogs/:id", blogController.allUserBlogs);
router.get("/api/Blog/:id", blogController.getBlog);
router.put("/api/oneUserBlogs/:id",uploadSingle, blogController.oneUserBlogs);
router.put("/api/addComments/:id", blogController.Comments);
router.put("/api/addLike/:id", blogController.Likes);
router.put("/api/deleteComment/:id", blogController.deleteComment);
router.post("/api/createNewBlog", uploadSingle,blogController.createNewBlog);
router.delete("/api/deleteBlog/:id", blogController.deleteBlog);


module.exports = router;