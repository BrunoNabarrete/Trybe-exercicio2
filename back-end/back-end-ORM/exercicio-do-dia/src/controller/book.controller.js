const BookService = require('../services/book.service');

const getAll = async(req, res) => {
    try{
        const book = await BookService.getAll();
        return res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Ocorreu um erro' })
    }
}

const getById = async ( req, res) => {
    
    try{
        const { id } = req.params
        const book = await BookService.getById(id);
        if (!book) return res.status(404).json({message: 'livro não encontrado'})
        return res.status(200).json(book)
    } catch (e) {
        res.status(500).json({ message: 'não retornou o livro com id'})
    }
}

const createBook = async (req, res) => {
    try{
        const {title, author, pageQuantity} = req.body
        const newBook = await BookService.createBook(title, author, pageQuantity);

        if (!newBook) return res.status(404).json({message: 'erro para criar'});

        return newBook
    } catch (e) {
        res.status(500).json({messsage: 'Erro'})
    }
}

const updateBook = async (req, res) =>{
    try{
        const {title, author, pageQuantity } = req.body
        const { id } = req.params
        const newBook = await BookService.updateBook(title, author, pageQuantity);

        if (!newBook) return res.status(404).json({ message: 'livro não encontrado'})

        return newBook
    } catch (e) {
        res.status(500).json({ message: 'deu algum erro'})
    }
}

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook
}