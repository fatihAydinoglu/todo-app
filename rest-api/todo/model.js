const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    status: String
});

const TodoModel = mongoose.model('TodoModel', todoSchema);

module.exports = TodoModel;