import BookModel from "../models/book.model";
import connection from "../models/connection";
import Book from "../interfaces/book.interface";
import { BadRequestError, NotFoundError } from "restify-errors";

class BookService {
    model: BookModel;

    constructor() {
        this.model = new BookModel(connection);
    }

    validateProperties(book: Book): [boolean, string | null] {
        const properties = ['title', 'price', 'author', 'isbn'];

        for (let i = 0; i < properties.length; i += 1) {
            if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {

                return [false, properties[i]];
            }
        };
        return [true, null];
    }

    validateValue(book: Book): [boolean, string | null] {
        const entrie = Object.entries(book);

        for (let i = 0; i < entrie.length; i += 1) {
            const [property, value] = entrie[i];

            if (!value) {
                return [false, property];
            }
        }
        return [true, null];
    }

    validationBook(book: Book): void | string {
        let [valid, property] = this.validateProperties(book);

        if (!valid) {
            return `O campo ${property} é obrigatório.`;
        }

        [valid, property] = this.validateValue(book);

        if (!valid) {
            return `O campo ${property} não pode ser nulo ou vazio.`;
        }
    }

    async getAll(): Promise<Book[]> {
        const books = await this.model.getAll();
        return books;
    }

    async getById(id: number): Promise<Book> {
        const book = await this.model.getById(id);
        return book;
    }

    create(book: Book): Promise<Book> {
        const isValidBook = this.validationBook(book);

        if ( typeof isValidBook === 'string') {
            throw new BadRequestError(isValidBook);
        }
        return this.model.create(book);
    }

    async upadte(id: number, book: Book): Promise<void> {
        const isValidBook = this.validationBook(book);
        if (typeof isValidBook === 'string') {
            throw new BadRequestError(isValidBook);
        }

        const bookFound = await this.model.getById(id);
        return this.model.update(id, book);
    }

    async remove(id: number): Promise<void> {
        const bookFound = await this.model.getById(id);

        if (!bookFound) {
            throw new NotFoundError('Book not found');
        }

        this.model.remove(id);
    }
    
}

export default BookService;