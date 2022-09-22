

// const factorial = (n) => {
//     let result = 1

//     for(let index = 2; index <= n; index +=1) {
//         result *= index;
//     }

//     return result
// }

// const print = factorial(5);
// console.log(`Esse é o fatorial ${print}`);

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(4));

let longestWord ='Antônio foi ao banheiro e não sabemos o que aconteceu';

const longest = () => {
    const splits = longestWord.split(' ');
    let maxLenght = 0;
    let result = '';

    for (let range of splits) {
        if (range.length > maxLenght) {
            maxLenght = range.length;
            result = range;
        };
    }
    return result;
    
} 

console.log(longest())