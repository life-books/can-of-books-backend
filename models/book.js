'use strict'

const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema({
    title: String,
    description: String,
    status: Boolean
})

//gives function to communicate with the database

// const BookModel = mongoose.model('Book', bookSchema);

module.exports = mongoose.model('Book', bookSchema);