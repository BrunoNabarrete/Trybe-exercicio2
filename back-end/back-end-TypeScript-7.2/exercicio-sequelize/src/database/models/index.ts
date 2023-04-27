import { Sequelize } from 'sequelize';
import * as config from '../config/database';
import Author from './AuthorModel';
import Book from './BookModel';


(async () => {
    const data = await Author.findAll({
      include: {
        model: Book,
        attributes: [],
      },
      attributes: [
        ['name', 'author'],
        [Sequelize.fn('COUNT', Sequelize.col('books.id')), 'totalBooks'],
      ],
      group: 'authors.name',
      order: [['totalBooks', 'DESC']],
      raw: true,
    });
  
    console.log(data);
    process.exit(0);
  })();

export default new Sequelize(config);