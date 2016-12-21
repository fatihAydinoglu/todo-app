const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const compression = require('compression');
const todo = require('./todo/routes');
const errorHandlers = require('./utils/error-handlers');
const db = require('./db');
const logger = require('./utils/logger');
const security = require('./utils/security');

const app = new express();

// security
app.use(security);

// for parsing application/json
app.use(bodyParser.json());

//validator
app.use(expressValidator());

//compression
app.use(compression());

// Todo api router
app.use('/api/todo', todo);

// App heart beat
app.get('/ping', (req, res) => res.send('pong'));

//Error Handling
app.use(errorHandlers);

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {
    db.connection.close(() => {
        logger.info(`Mongoose default connection disconnected 
                        through app termination`);
        process.exit(0); // eslint-disable-line
    });
});

module.exports = app;