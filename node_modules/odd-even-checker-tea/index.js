// index.js

function isEven(number) {
    return number % 2 === 0;
  }
  
  function isOdd(number) {
    return !isEven(number);
  }
  
  const number = 5;
  
  if (isEven(number)) {
    console.log(`${number} is an even number.`);
  } else {
    console.log(`${number} is an odd number.`);
  }
  