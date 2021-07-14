import {RequestHandler} from 'express';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is users');
} as RequestHandler);

module.exports = router;
