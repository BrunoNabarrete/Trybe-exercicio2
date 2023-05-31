const BookService = require('../services/book.service');

const getAll = async(req, res) => {
    try{
        const book = await BookService.getAll();
        return res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Ocorreu um erro' })
    }
}