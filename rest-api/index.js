const app = require('./app');
const config = require('./config');
const logger = require('./logger');

app.listen(config.REST_API_PORT, () =>
    logger.info('App is started. Port: ' + config.REST_API_PORT)
);