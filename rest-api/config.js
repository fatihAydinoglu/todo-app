const config = {};

//Rest Api Port
config.REST_API_PORT = process.env.REST_API_PORT || 3000;

//Mongo DB Url
config.MONGO_DB_URL = 'mongodb://localhost:27017/todoapp2';

module.exports = config;

