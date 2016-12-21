const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./utils/logger');

//Connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_DB_URL, (err) => {
    if (err) logger.error(err);
});

module.exports = mongoose;