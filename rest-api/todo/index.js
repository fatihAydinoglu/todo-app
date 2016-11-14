// todo
// - parameter validation
// - send error code on failures
// - http status codes


const express = require('express');
const bodyParser = require('body-parser');

const logger = require('../logger');
const model = require('./model');

const todo = new express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

todo.use(allowCrossDomain);

// for parsing application/json
todo.use(bodyParser.json()); 

// for parsing application/x-www-form-urlencoded
todo.use(bodyParser.urlencoded({ extended: true })); 

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
    model.findByIdAndUpdate(req.params.id, { status: req.body.status }, {new: true},
        function(err, result) {
          if (err) throw err;
          if(!result) result = {};
          console.log('result', result);
          res.json(result);
        }
    );
})

// Get all todos
todo.get('/', (req, res) => {
    model.find({}, 'title status' ,function(err, result) {   
      if (err) throw err;
      res.json(result); 
    }); 
})

// Get a todo
todo.get('/:id', (req, res) => {
    model.findOne({_id: req.params.id}, 'title status' ,function(err, result) {   
      if (err) throw err;
      if(!result) result = {};
      res.json(result); 
    }); 
})

// Delete a todo
todo.delete('/:id', (req, res) => {
    model.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) throw err;
      if(!result) result = {};
      res.json(result); 
    });
})

module.exports = todo;