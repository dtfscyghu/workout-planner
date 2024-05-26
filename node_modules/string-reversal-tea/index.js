// index.js

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const inputString = 'Hello World';
  const reversedString = reverseString(inputString);
  console.log(`Original string: ${inputString}`);
  console.log(`Reversed string: ${reversedString}`);
  