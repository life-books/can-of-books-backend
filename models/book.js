'use strict'

const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema({
    title: String,
    description: String,
    status: Boolean
})

module.exports = mongoose.model('Book', bookSchema);