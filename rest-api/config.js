const config = {};

//Rest Api Port
config.REST_API_PORT = process.env.REST_API_PORT || 3000;

//Mongo DB Url
config.MONGO_DB_URL = process.env.MONGO_DB_URL ||
    'mongodb://localhost:27017/todoapp';

//Client Access Allow Origin
config.CLIENT_ACCESS_ALLOW_ORIGIN = process.env.CLIENT_ACCESS_ALLOW_ORIGIN ||
    'http://localhost:8080';

module.exports = config;