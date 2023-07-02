const express = require("express");
const {
  blog_list,
  blog_create,
  blog_add,
  blog_info,
  blog_delete,
} = require("../controllers/blogController");
const router = express.Router();

router.get("/", blog_list);
router.get("/create", blog_create);
router.get("/:id", blog_info);
router.delete("/:id", blog_delete);
router.post("/", blog_add);

module.exports = router;
