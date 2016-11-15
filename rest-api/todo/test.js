var supertest = require("supertest");
var todo = require('./');

describe('Todo Api', () => {

    var testTodoId;

    // Post - /
    describe('Create request', () => {
        it('should create todo', (done) => {
            supertest(todo)
                .post('/')
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

            supertest(todo)
                .put('/' + testTodoId)
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
            supertest(todo)
                .get('/')
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

            supertest(todo)
                .get('/' + testTodoId)
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

            supertest(todo)
                .delete('/' + testTodoId)
                .expect(200)
                .end((err, res) => {
                    done(err);
                })

        });
    });

});

