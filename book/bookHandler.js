'use strict'

const Book = require('../models/book');

const bookHandler ={};

bookHandler.postBook = function(req, res, next){
    const data = req.body;
    Book.create(data)
      .then(createdBook => res.status(200).send(createdBook))
      .catch(err => next(err))
}
bookHandler.getBooks = function(req, res, next){
    let queryObject = {};
    Book.find(queryObject)
        .then(data => res.status(200).send(data))
        .catch(err => console.error(err));
}

bookHandler.putBook = function (req, res, next) {
    const id = req.params.bookID;
    const data = req.body;
    Book.findByIdAndUpdate(id, data, { new: true, overwrite: true })
        .then(updatedBook => res.status(200).send(updatedBook))
        .catch(err => next(err));
}

bookHandler.deleteBook = function(req, res, next){
    const id = req.params.bookID;
    Book.findByIdAndDelete(id)
    .then(deletedBook => res.status(200).send(deletedBook))
    .catch(err => next(err))
}

module.exports = bookHandler;