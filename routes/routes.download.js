const express = require('express');
const router = express.Router();
const download = require('../controller/download')

router.get('/download',download);

module.exports = router;

