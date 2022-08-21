let fruits = [3, 4, 10, 1, 12];

let sum = 0;

for (let i = 0; i < fruits.length; i +=1) {
    sum += fruits[i];
}

if (sum <= 15){
    console.log('Valor menor que 16');
} else {
    console.log(sum);
}


const n = 9 ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);
