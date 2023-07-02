const express = require("express");
const { blog_list, blog_create } = require("../controllers/blogController");
const router = express.Router();

router.get("/", blog_list);
router.get("/create", blog_create);
module.exports = router;
