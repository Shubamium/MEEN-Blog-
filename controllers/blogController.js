const { add } = require("../models/db");

module.exports.blog_list = (req, res) => {
  // res.render("blog/add");
  res.redirect("../");
};

module.exports.blog_create = (req, res) => {
  res.render("pages/blog/add");
};

module.exports.blog_add = (req, res) => {
  //   console.log(req.body);
  add(req.body);
  res.redirect("../");
};
