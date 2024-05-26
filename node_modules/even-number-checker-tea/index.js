// index.js

function isEven(number) {
    return number % 2 === 0;
  }
  
  const numberToCheck = 6;
  if (isEven(numberToCheck)) {
    console.log(`${numberToCheck} is an even number.`);
  } else {
    console.log(`${numberToCheck} is not an even number.`);
  }
  