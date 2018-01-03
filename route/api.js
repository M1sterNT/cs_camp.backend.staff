import express from 'express';
import Total from  './../controllers/total.controller'

let api = express.Router();

/* GET API TOTAL. */
api.get('/api/total/:id', Total);

module.exports = api;