const helmet = require('helmet');
const cors = require('cors');

const config = require('../config');

const securityArray = [];

//helmet
securityArray.push(helmet());
securityArray.push(helmet.noCache());

//CORS middleware
const corsOptions = {
    origin: config.CLIENT_ACCESS_ALLOW_ORIGIN,
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200
};

securityArray.push(cors(corsOptions));

module.exports = securityArray;