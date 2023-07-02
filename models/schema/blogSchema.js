const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true, id: true }
);

const Blog = mongoose.model("Blog", blogSchema, "blogs");
module.exports = Blog;
