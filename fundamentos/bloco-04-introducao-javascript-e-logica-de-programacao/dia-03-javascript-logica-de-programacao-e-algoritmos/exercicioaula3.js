// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = Math.floor(Math.random() * 3);
let player2 = Math.round(Math.random() * 2);

// 0 = pedra
// 1 = tesoura
// 2 = papel
console.log(player1 , player2);

if (player1 === player2){
    console.log('A Ties');
} else if (player1 === 0 && player2 === 1 || player1 === 1 && player2 === 2 || player1 === 2 && player2 === 0){
    console.log('Player 1 won !');
} else {
    console.log('Player 2 won!');
}
