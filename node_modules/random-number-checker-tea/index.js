// index.js

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function isEven(number) {
    return number % 2 === 0;
  }
  
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);
  console.log(`Random number between ${min} and ${max}: ${randomNumber}`);
  
  if (isEven(randomNumber)) {
    console.log(`${randomNumber} is an even number.`);
  } else {
    console.log(`${randomNumber} is not an even number.`);
  }
  