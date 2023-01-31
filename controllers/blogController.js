const Blog = require("./../modals/BlogModal");
exports.getAllBlogs = async (req, res) => {
  try {
    const result = await Blog.find();
    res.json({
      success: true,
      message: "All Blog Fetched",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: ` Error ${error}`,
    });
  }
};
exports.ADDBlog = async (req, res) => {
  try {
    console.log(req.body);
    await Blog.create(req.body);
    res.json({
      success: true,
      message: " Blog created succesfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: ` Error ${error}`,
    });
  }
};
//http://localhost:5000/blog/21313131
exports.removeBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    await Blog.findByIdAndDelete(blogId);
    res.json({
      success: true,
      message: " Blog removed succesfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: ` Error ${error}`,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndUpdate(id, req.body);
    res.json({
      success: true,
      message: " Blog update succesfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: ` Error ${error}`,
    });
  }
};
