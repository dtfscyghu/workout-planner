// index.js

const quotes = require('./quotes');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

console.log(getRandomQuote());
