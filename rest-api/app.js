const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const todo = require('./todo');
const config = require('./config');
const logger = require('./logger');

const app = new express();

// App heart beat
app.get('/ping', (req, res, next) => res.send('pong'));

//Connect to mongodb
mongoose.connect(config.MONGO_DB_URL, (err) => {
    if(err) logger.error(err);
});

// Todo api
app.use('/api/todo', todo);

module.exports = app;