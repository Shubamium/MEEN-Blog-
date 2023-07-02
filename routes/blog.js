const express = require("express");
const {
  blog_list,
  blog_create,
  blog_add,
} = require("../controllers/blogController");
const router = express.Router();

router.get("/", blog_list);
router.get("/create", blog_create);
router.post("/", blog_add);

module.exports = router;
