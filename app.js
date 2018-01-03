"use strict";
import express from 'express';
import web  from './route/web';
import api  from './route/api';

//using let
let app = express();

//route
app.use('/', web);
app.use('/', api);

app.use('*', function(req, res, next) {
    res.send(' 404 NOT FOUND ');
});

// using arrow syntax
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;