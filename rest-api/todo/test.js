var supertest = require("supertest");
const express = require('express');
var app = require('../app');

describe('Todo Api', () => {

    var testTodoId;

    // Post - /
    describe('Create request', () => {
        it('should create todo', (done) => {
            supertest(app)
                .post('/api/todo/')
                .type('json')
                .send('{"title":"read a book.", "status":"TODO"}')
                .expect(200)
                .end((err, res) => {
                    testTodoId = res.body._id;
                    done(err);
                });
        });
    });


    // Put - /
    describe('Update request', () => {
        it('should update todo', (done) => {
            if (!testTodoId) {
                throw new Error('There is no todo to update');
            }

            supertest(app)
                .put('/api/todo/' + testTodoId)
                .type('json')
                .send(`{"status":"DONE"}`)
                .expect(200)
                .end((err, res) => {
                    done(err);
                })

        })
    });



    // Get - /
    describe('List all request', () => {
        it('should return all todos', (done) => {
            supertest(app)
                .get('/api/todo/')
                .expect(200)
                .end((err, res) => {
                    done(err);
                });
        })
    });

    // Get - /id
    describe('Get one request', () => {
        it('should return todo', (done) => {

            if (!testTodoId) throw new Error('There is no todo to get');

            supertest(app)
                .get('/api/todo/' + testTodoId)
                .expect(200)
                .end((err, res) => {
                    done(err);
                })
        })
    });

    // Delete - /id
    describe('Delete request', () => {
        it('should delete todo', (done) => {

            if (!testTodoId) throw new Error('There is no todo to delete');

            supertest(app)
                .delete('/api/todo/' + testTodoId)
                .expect(200)
                .end((err, res) => {
                    done(err);
                })

        });
    });

});

