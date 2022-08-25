//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let carolzita = Math.floor(Math.random() * 100);
let murillo = Math.floor(Math.random() * 100);
let baeta = Math.floor(Math.random() * 100);

let idade = [carolzita, murillo, baeta];

if (carolzita < murillo && carolzita < baeta) {
    console.log('Carolzita é a mais nova');
} else if (murillo < carolzita && murillo < baeta) {
    console.log('Oliva é o mais novo');
} else {
    console.log('Baêta é é o mais novo');
}