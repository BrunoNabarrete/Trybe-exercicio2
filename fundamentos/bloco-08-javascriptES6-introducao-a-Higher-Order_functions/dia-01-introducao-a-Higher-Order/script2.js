
//exercicio 1.
const creatLogin = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@trybe.com`};
};

const newEmployees = (creatLogin) => {
    const empregados = {
        id1: creatLogin('Pedro Guerra'),
        id2: creatLogin('Luiza Drumond'),
        id3: creatLogin('Carla Paiva'),
    }
    return empregados;
}
console.log(newEmployees(creatLogin));

//exercicio 2.

const randomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
}

const checkNumber = () => {
    const number2 = randomNumber();
    if (randomNumber() === number2) {
        return 'Parabéns você ganhou';
    } 
    return 'Tente novamente';
}

console.log(checkNumber(randomNumber));

//exercicio 3.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studenteAnswer) => {
    if (rightAnswer === studenteAnswer) {
        return 1;
    }
    if (studenteAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
}

const countPoints = (rightAnswers, studenteAnswers, action) => {
    let count = 0;
    for (let index = 0; index < rightAnswers.length ; index +=1) {
        const actionReturn = action(rightAnswers[index], studenteAnswers[index]);
        count += actionReturn;
    }
    return `Resultado final: ${count} pontos`
}

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

