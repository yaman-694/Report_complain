const express = require('express');
const router = express.Router();
const { input,get_all } = require('../controller/input')


router.post('/input',input).get('/show_all',get_all);
module.exports = router;

