// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {
    oddsAndEvens.sort((a, b) => a - b);

//   console.log(oddsAndEvens);
  }
  sortOddsAndEvens();
  console.log(`Os números ${oddsAndEvens} se encontram ordenador de forma crescente`);