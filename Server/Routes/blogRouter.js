const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const upload = require("../middleware/handleImage")

router.get("/api/getAllBlogs", blogController.getAllBlogs);
router.get("/api/allUserBlogs/:id", blogController.allUserBlogs);
router.put("/api/oneUserBlogs/:id",upload.single("image"), blogController.oneUserBlogs);
router.post("/api/createNewBlog",upload.single("image"), blogController.createNewBlog);
router.delete("/api/deleteBlog/:id", blogController.deleteBlog);

module.exports = router;