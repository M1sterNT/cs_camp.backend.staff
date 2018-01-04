import express from 'express';

let web = express.Router();

/* GET home page. */
web.get('/', function(req, res, next) {
  res.send(' CSCAMP X Server API ');
});

module.exports = web;