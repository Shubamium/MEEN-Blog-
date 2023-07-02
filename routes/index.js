const express = require("express");
const { index_home, index_about } = require("../controllers/indexController");
const router = express.Router();

router.get("/", index_home);
router.get("/about", index_about);

module.exports = router;
