const readline = require('readline-sync')

// const wieghtInKg = 93;
// const heightInCm = 178;

function handleBMI(weight, height) {
    console.log(`PEso: ${weight}, Altura ${height}`);

    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;

    const bmi = weight / heightSquared;

    return bmi;
};

// function main() {
//     const bmi = handleBMI(wieghtInKg, heightInCm);
 const weight = readline.questionFloat('Qual é seu peso? (kg) ');
 const height = readline.questionInt('Qual é sua altura? (cm) ')

 const bmi = handleBMI(weight, height);
//     console.log(`BMI: ${bmi.toFixed(2)}`)
// }

// main();