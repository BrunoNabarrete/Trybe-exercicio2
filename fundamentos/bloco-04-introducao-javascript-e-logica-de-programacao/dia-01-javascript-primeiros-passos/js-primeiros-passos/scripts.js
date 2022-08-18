const myName = 'Bruno Nabarrete da Silva';
const birthCity = 'São Bernardo do Campo';
let birthYear = 1997;
birthYear = 2030
birthCity = 'Santo André'

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// Explicando item 06 do Primeiro Passo: não houve alteração no birthCity, pois se trata de uma constante;


let base = 5;

let height = 8;

const area = base * height;

console.log(area);

let perimeter = 3 + 3 + 3;

console.log(perimeter);


// operadores de condições If/else;


let nota = 50
nota = 90

if (nota >= 80) {
    console.log('Parabéns, você foi aprovada');
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera')
} else if (nota < 60) {
    console.log('Você foi reprovado')
} else {

}

// operadores logicos;
// operador and;


const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
    console.log('Muito obrigado pela refeição :)');
} else {
    console.log('Acho que houve um engano no meu pedido')
}


const currentHour = 18;
let message = ''

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar';
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um volo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!';
} else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hm, cheiro de café recém passado'
}

console.log(message);

// operador OR;

let weekDay = 'sabado';

if (weekDay === 'segunda-feira' || weekDay ==='terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de apredizado na trybe');
} else {
    console.log('Finalmente, descanso merecido');
}

// operador switch -- case;

let estadoCandidato = 'lista';

switch (estadoCandidato) {
    case 'aprovada':
        console.log('Aprovado !')
        break;
    case 'lista':
        console.log('Lista de espera');
        break;
    case 'reprovada':
        console.log('Reprovado!');
    default:
        console.log('Não se aplica')
}