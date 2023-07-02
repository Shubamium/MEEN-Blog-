const express = require("express");
const { blog_list } = require("../controllers/blogController");
const router = express.Router();

router.get("/", blog_list);

module.exports = router;
