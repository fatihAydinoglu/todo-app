const model = require('./model');

const methods = {};

methods.save = (title, status, done) => {
    var newTodo = model({
        title,
        status
    });

    newTodo.save((err, result) => {
        done(err, result);
    });
};

methods.list = (done) => {
    model.find({}, 'title status', (err, result) => {
        done(err, result);
    });
};

methods.get = (id, done) => {
    model.findOne({ _id: id }, 'title status', (err, result) => {
        if (!result) result = {};
        done(err, result);
    });
};

methods.update = (id, status, done) => {
    model.findByIdAndUpdate(id, { status }, { new: true },
        (err, result) => {
            if (!result) result = {};
            done(err, result);
        }
    );
};

methods.delete = (id, done) => {
    model.findByIdAndRemove(id, (err, result) => {
        if (!result) result = {};
        done(err, result);
    });
};


module.exports = methods;