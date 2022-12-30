const express = require('express');
const router = express.Router();
const search = require('../controller/search')
// const get_all = require('../controller/input')

router.get('/search',search);
module.exports = router;