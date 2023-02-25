'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { application } = require('express');
const bookHandler = require('./book/bookHandler');
const verifyUser = require('./auth');


const app = express();
app.use(cors());

//required for the body
app.use(express.json());

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/', (req,res) => res.status(200).send('Default Route Working'));

app.get('/test', (req, res) => {

  res.send('test request received')

})

app.use(verifyUser);

// CRUD API
app.post('/books', bookHandler.postBook);
app.get('/books', bookHandler.getBooks);
app.put('/books/:bookID', bookHandler.putBook);
app.delete('/books/:bookID', bookHandler.deleteBook);

app.get('*', (request, response) => {
  response.status(404).send('For you, Not available');
});


// ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
