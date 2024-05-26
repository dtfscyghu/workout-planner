// index.js

function generateFibonacciList(length) {
    const fibonacciList = [0, 1];
    for (let i = 2; i < length; i++) {
      fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2];
    }
    return fibonacciList;
  }
  
  const length = 10;
  const fibonacciList = generateFibonacciList(length);
  console.log(`Fibonacci list of length ${length}:`, fibonacciList);
  