const logger = require('./logger');

module.exports.logErrors = function (err, req, res, next) {
    logger.error(err.stack);
    next(err);
};


module.exports.clientErrorHandler = function (err, req, res, next) {
    res.status(500).json({ error: 'Something failed!' });
    next(err);
};


module.exports.notFoundErrorHandler = function (req, res, next) {
  res.status(404).json({ error: 'Sorry cant find that!'});
};