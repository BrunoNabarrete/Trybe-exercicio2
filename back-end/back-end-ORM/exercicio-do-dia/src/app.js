const express = require('express');

const Book = require('./controller/book.controller');

const app = express();

app.use(express.json());

app.get('/books', Book.getAll);

app.get('/book/:id', Book.getById)

app.post('/book', Book.createBook)

app.put('/book/:id', Book.updateBook)

app.delete('/book/:id', Book.deleteBook)

module.exports = app;