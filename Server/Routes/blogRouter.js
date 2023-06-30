const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/api/getAllBlogs", blogController.getAllBlogs);
router.get("/api/allUserBlogs/:id", blogController.allUserBlogs);
router.put("/api/oneUserBlogs/:id", blogController.oneUserBlogs);
router.post("/api/createNewBlog", blogController.createNewBlog);
router.delete("/api/deleteBlog/:id", blogController.deleteBlog);

module.exports = router;