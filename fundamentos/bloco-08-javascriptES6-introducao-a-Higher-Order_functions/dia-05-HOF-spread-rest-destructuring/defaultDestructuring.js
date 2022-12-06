// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
//   };
  
//   const { nationality } = person;

//   console.log(nationality)


// exercicio. Do jeito que está, quando person é passado para a função getNationality o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.
// sempre que nationality for undefined ele vai determinar brazilian.
  const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));