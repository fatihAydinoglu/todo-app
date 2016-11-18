const express = require('express');
const logger = require('../utils/logger');
const methods = require('./methods');

const todo = new express.Router();

// Create a new todo
todo.post('/', (req, res) => {

    //Get params
    const { title, status } = req.body;

    //Save
    methods.save(title, status, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
})



// Update todo
todo.put('/:id', (req, res) => {

    //Get params
    const { id } = req.params;
    const { status } = req.body;

    //Update
    methods.update(id, status, (err, result) => {
        if (err) throw err;
        res.json(result);       
    })

})

// Get all todos
todo.get('/', (req, res) => {
    methods.list((err, result) => {
        if (err) throw err;
        res.json(result);
    });
})

// Get a todo
todo.get('/:id', (req, res) => {

    const { _id } = req.params;

    //Get
    methods.get(_id, (err, result) => {
        if (err) throw err;
        res.json(result);       
    });
})

// Delete a todo
todo.delete('/:id', (req, res) => {

    const { id } = req.params; 

    //Delete
    methods.delete(id, (err, result) => {
        if (err) throw err;
        res.json(result);         
    })
})

module.exports = todo;