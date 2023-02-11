'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);
const Dog = require('./models/book');

async function seed (){
    await Book.create({
        title: 'The Fellowship of the Ring',
        description: 'A very long roadtrip',
        status: true
    })
    .then(response => console.log('Saved Fellowship to Database'))
    .catch(err => console.error(err));

    await Book.create({
        title: 'The Two Towers',
        description: 'I heard you liked battling in the deep',
        status: false
    })
    .then(response => console.log('Saved Two Towers to Database'))
    .catch(err => console.error(err));

    await Book.create({
        title: 'The Return of the King',
        description: 'Gollum does the worst wedding proposal ever',
        status: true
    })
    .then(response => console.log('Saved Return of the King to Database'))
    .catch(err => console.error(err));

    mongoose.disconnect();
}

// Runs function when file is ran with *node seed.js*
seed();