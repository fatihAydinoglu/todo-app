const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const todo = require('./todo');
const logger = require('./utils/logger');
const errorHandler = require('./utils/error-handler');

const app = new express();

//Connect to mongodb
mongoose.connect(config.MONGO_DB_URL, (err) => {
    if (err) logger.error(err);
});

//CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Todo api
app.use('/api/todo', todo);

// App heart beat
app.get('/ping', (req, res, next) => res.send('pong'));

//Error Handling
app.use(errorHandler.logErrors);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.notFoundErrorHandler);

module.exports = app;