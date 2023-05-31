const { Book } = require('../models')

const getAll = async () => {
    const book = await Book.findAll();

    return book;
};

const getById = async (id) => {
    const book = await Book.findByPk(id);

    return book
}

const createBook = async (title, author, pageQuantity) => {
    const book = await Book.create({title, author, pageQuantity});

    return book;
}

const updateBook = async (id, title, author, pageQuantity) => {
    const [updateBook] = await Book.update(
        { title, author, pageQuantity },
        { where: {id} },
    );

    return updateBook
}

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook
}