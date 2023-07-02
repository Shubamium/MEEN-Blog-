const { addBlog, getBlogs, getBlog } = require("../models/db");

module.exports.blog_list = async (req, res) => {
  const blogs = await getBlogs();
  res.render("pages/blog/index", { blogs });
};

module.exports.blog_create = (req, res) => {
  res.render("pages/blog/add");
};

module.exports.blog_add = (req, res) => {
  addBlog(req.body);
  res.redirect("../");
};

module.exports.blog_info = async (req, res) => {
  const blog = await getBlog(req.params.id);
  if (blog) {
    res.render("pages/blog/detail", { blog });
  } else {
    res.redirect("../");
  }
};
