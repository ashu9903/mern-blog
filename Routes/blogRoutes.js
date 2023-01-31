const {
  getAllBlogs,
  ADDBlog,
  removeBlog,
  updateBlog,
} = require("../controllers/blogController");

const router = require("express").Router();

router
  .get("/", getAllBlogs)
  .post("/add", ADDBlog)
  .delete("/:blogId", removeBlog)
  .put("/:id", updateBlog);

module.exports = router;
