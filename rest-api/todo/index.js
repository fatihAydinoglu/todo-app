const express = require('express');
const logger = require('../utils/logger');
const model = require('./model');

const todo = new express.Router();

// Create a new todo
todo.post('/', (req, res) => {

    var newTodo = model({
        title: req.body.title,
        status: req.body.status
    });

    newTodo.save((err, result) => {
        if (err) throw err;
        res.json(newTodo);
    });

})

// Update todo
todo.put('/:id', (req, res) => {
    model.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true },
        (err, result) => {
            if (err) throw err;
            if (!result) result = {};
            res.json(result);
        }
    );
})

// Get all todos
todo.get('/', (req, res) => {
    model.find({}, 'title status', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
})

// Get a todo
todo.get('/:id', (req, res) => {
    model.findOne({ _id: req.params.id }, 'title status', (err, result) => {
        if (err) throw err;
        if (!result) result = {};
        res.json(result);
    });
})

// Delete a todo
todo.delete('/:id', (req, res) => {
    model.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) throw err;
        if (!result) result = {};
        res.json(result);
    });
})

module.exports = todo;