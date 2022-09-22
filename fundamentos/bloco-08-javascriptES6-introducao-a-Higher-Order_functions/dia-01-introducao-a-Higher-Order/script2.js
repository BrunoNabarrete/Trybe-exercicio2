

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