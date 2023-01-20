const express = require('express');
const router = express.Router();
const { input,get_all,delete_complain } = require('../controller/input')

router.post('/input',input).get('/show_all',get_all).delete('/delete/:complain_accept_no',delete_complain);
module.exports = router;

