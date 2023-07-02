const mongoose = require("mongoose");
const Blog = require("./schema/blogSchema");
const dbURI =
  "mongodb://mongo:dvwjAKS3FcnYrdP7j7OK@containers-us-west-208.railway.app:6841";

async function connect(callback) {
  try {
    await mongoose.connect(dbURI);
    console.log("DB Connection established");
    callback && callback();
  } catch (err) {
    console.log("Error connecting to the database");
  }
}

async function addBlog(blogData) {
  //   const blog = new Blog({ ...blogData });
  console.log("Adding data:", blogData);
  const blog_add = new Blog({
    title: blogData.title || "",
    content: blogData.content,
  });
  await blog_add.save();
}

async function getBlogs() {
  const blogs = await Blog.find();
  return blogs;
}

async function getBlog(id) {
  console.log(id);
  const blog = await Blog.findById(id);
  return blog;
}

module.exports = {
  connect,
  addBlog,
  getBlogs,
  getBlog,
};
