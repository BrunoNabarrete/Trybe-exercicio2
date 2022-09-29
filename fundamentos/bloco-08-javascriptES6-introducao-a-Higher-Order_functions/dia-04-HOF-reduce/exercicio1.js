//exercicio Utilize o reduce para transformar uma matriz em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arr) {
    return arr.reduce((acc, current) => acc.concat(current), []);
  }
  const [item1, item2, item3] = arrays
  const test = [...item1, ...item2, ...item3];
  console.log(test);
  console.log(flatten(arrays))