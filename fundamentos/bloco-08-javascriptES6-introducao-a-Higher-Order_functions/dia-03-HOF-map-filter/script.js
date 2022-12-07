//exercicio 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA


const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  // Adicione o código do exercício aqui:
  const describe = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

//   console.log(describe);

  //exercicio 2. Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

  function nameAndAge() {
    // escreva seu código aqui
  return books.map((book) => ({
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name,
  })).sort((a, b) => a.age - b.age)
  }
//   const result = books.map((book) => ({
//     age: book.releaseYear - book.author.birthYear,
//     author: book.author.name,
//   }))

  console.log(nameAndAge());

  //exercicio 3 -Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
  
  function fantasyOrScienceFiction() {
    // escreva seu código aqui
    return books.filter((genero) => genero.genre === 'Fantasia' || genero.genre === 'Ficção Científica')
  }

  console.log(fantasyOrScienceFiction())

  //exercicio 4. Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

  function oldBooksOrdered() {
    // escreva seu código aqui
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    return books.filter((year) => (year.releaseYear < currentYear - 60)).sort((yearA, yearB) => yearA.releaseYear - yearB.releaseYear);
  }

<<<<<<< HEAD
  console.log(oldBooksOrdered());
  
=======
  console.log(oldBooksOrdered())
>>>>>>> ef12ceff5b7062e70a95234b145ec3d993a832e0
