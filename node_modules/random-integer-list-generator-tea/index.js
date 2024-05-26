// index.js

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomIntegerList(length, min, max) {
    const randomIntegerList = [];
    for (let i = 0; i < length; i++) {
      randomIntegerList.push(generateRandomInteger(min, max));
    }
    return randomIntegerList;
  }
  
  const length = 10;
  const min = 1;
  const max = 100;
  const randomIntegerList = generateRandomIntegerList(length, min, max);
  console.log(`Random integer list of length ${length} between ${min} and ${max}:`, randomIntegerList);
  