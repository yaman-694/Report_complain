const express = require("express");
const router = express.Router();
const search = require("../controller/search");

router.post("/search", search);
module.exports = router;
