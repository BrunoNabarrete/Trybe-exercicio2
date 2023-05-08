// Para testar!
// ./index.ts

import Subject from './Subject';

const math = new Subject('Ma');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

// deve retornar erro
// const invalidSubjectName = new Subject('Po');