const validation = {};

// Save
validation.save = (req, res, next) => {
    req.checkBody('title', 'Title can not be empty.').notEmpty();
    const validationErrors = req.validationErrors();
    if(!validationErrors) {
        next();
    } else {
        res.status(400).json(validationErrors);
    }
};

//Update
validation.update = (req, res, next) => {
    req.checkBody('status', 'Status can not be empty.').notEmpty();
    const validationErrors = req.validationErrors();
    if(!validationErrors) {
        next();
    } else {
        res.status(400).json(validationErrors);
    }
};


module.exports = validation;