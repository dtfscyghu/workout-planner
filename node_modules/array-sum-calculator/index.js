// index.js

function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers);
  console.log(`Sum of numbers in array: ${sum}`);
  