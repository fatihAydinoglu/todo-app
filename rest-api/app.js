const express = require('express');
const bodyParser = require('body-parser');

const todo = require('./todo');
const logger = require('./logger');

const app = new express();

// App heart beat
app.get('/ping', (req, res, next) => res.send('pong'));



// Todo api
app.use('/api/todo', todo);

module.exports = app;