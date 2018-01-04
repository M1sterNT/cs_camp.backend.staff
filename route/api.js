import express from 'express';
import Total from  './../controllers/api/total.controller'
import savedata from './../controllers/api/savedata.controller'

let api = express.Router();

/* GET API TOTAL. */
api.get('/api/total/:id', Total);
api.post('/api/save', savedata);
module.exports = api;