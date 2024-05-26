// index.js

function countWordOccurrences(text, word) {
    const words = text.split(' ');
    let count = 0;
    words.forEach((w) => {
      if (w.toLowerCase() === word.toLowerCase()) {
        count++;
      }
    });
    return count;
  }
  
  const text = 'This is a simple text with some simple words in it.';
  const wordToCount = 'simple';
  const occurrences = countWordOccurrences(text, wordToCount);
  console.log(`The word "${wordToCount}" occurs ${occurrences} times in the text.`);
  