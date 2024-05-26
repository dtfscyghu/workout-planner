// index.js

function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
  }
  
  const text = 'This is a simple word counter project.';
  const wordCount = countWords(text);
  console.log(`Word count: ${wordCount}`);
  