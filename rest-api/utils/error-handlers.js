const logger = require('./logger');

const errorHandlers = [];

//Log errors
errorHandlers.push( (err, req, res, next) => {
    logger.error(err.stack);
    next(err);
});

//Client error handler
errorHandlers.push( (err, req, res, next) => {
    res.status(500).json({ error: 'Something failed!' });
    next(err);
});

//Not found error handler
errorHandlers.push( (req, res) => {
    res.status(404).json({ error: 'Sorry cant find that!'});
});

module.exports = errorHandlers;