
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

const checkNumber = (randomNumber) => {
    const number2 = Math.floor(Math.random() * 5) + 1;
    if (randomNumber() === number2) {
        return 'Parabéns você ganhou';
    } 
    return 'Tente novamente';
}

console.log(checkNumber(randomNumber));