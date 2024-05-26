// index.js

function generateFibonacciSequence(length) {
    const fibonacciSequence = [0, 1];
    for (let i = 2; i < length; i++) {
      fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }
    return fibonacciSequence.slice(0, length);
  }
  
  const length = 10;
  const fibonacciSequence = generateFibonacciSequence(length);
  console.log(`Fibonacci sequence of length ${length}:`, fibonacciSequence);
  