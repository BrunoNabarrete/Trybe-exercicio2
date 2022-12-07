const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

emailListInData.forEach(showEmailList);

// exemplo .find

const numbers2 = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers2.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers2.find((number) => number % 2 === 0);

console.log(isEven2); // 30

//exercicio fixar 1 Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers3 = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  let test1 = numbers3.find((number) => number % 3 === 0 & number % 5 === 0);
  return test1;
};

console.log(findDivisibleBy3And5());

//exercicio fixar 2 find. Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names2 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  let biggestName = names2.find((nome) => nome.length === 5)
  return biggestName;
};

console.log(findNameWithFiveLetters());

//exercicio fixar 3 Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:;

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  function findMusic(id) {
    let findMusic = musicas.find((music) => id === '31031685');
    return findMusic;
  };
  
  console.log(findMusic('31031685'));

  const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

// exercicio 5 Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every; 

  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    Object.values(arr).every((minimumAge) => minimumAge >= 20)
  };
  
  console.log(verifyAges(people, 18));