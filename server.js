'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const getBooks = require('./book/getBooks');
const postBooks = require('./book/postBooks');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/', (req,res) => res.status(200).send('Default Route Working'));

app.get('/test', (req, res) => {

  res.send('test request received')

})

app.get('/books', getBooks);
app.get('/books', postBooks);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
