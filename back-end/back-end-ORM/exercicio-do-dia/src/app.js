const Book = require('./controller/book.controller');

const app = express();

app.use(express.json());

app.get('/books', Book.getAll);

app.get('/book/:id', Book.getById)

app.post('/book', Book.createBook)

app.put('/book/:id', Book.updateBook)

module.exports = app;