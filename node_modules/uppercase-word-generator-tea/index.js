// index.js

const fs = require('fs');

function convertToUppercase(words) {
  return words.map(word => word.toUpperCase());
}

fs.readFile('words.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const words = JSON.parse(data);
  const uppercaseWords = convertToUppercase(words);
  console.log('Uppercase words:', uppercaseWords);
});
