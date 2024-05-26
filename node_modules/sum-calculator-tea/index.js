// index.js

function calculateSum(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = calculateSum(numbers);
  console.log(`Sum of numbers ${numbers.join(', ')} is: ${sum}`);
  