// index.js

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function generatePrimeNumbersInRange(min, max) {
    const primeNumbers = [];
    for (let i = min; i <= max; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    return primeNumbers;
  }
  
  const min = 1;
  const max = 100;
  const primeNumbersInRange = generatePrimeNumbersInRange(min, max);
  console.log(`Prime numbers between ${min} and ${max}:`, primeNumbersInRange);
  