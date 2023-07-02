module.exports.blog_list = (req, res) => {
  // res.render("blog/add");
  res.redirect("../");
};

module.exports.blog_create = (req, res) => {
  res.render("pages/blog/add");
};
