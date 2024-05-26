// index.js

function generateConsecutivePositiveIntegers(start, count) {
    const consecutiveIntegers = [];
    for (let i = 0; i < count; i++) {
      consecutiveIntegers.push(start + i);
    }
    return consecutiveIntegers;
  }
  
  const start = 1;
  const count = 10;
  const consecutiveIntegers = generateConsecutivePositiveIntegers(start, count);
  console.log(`Consecutive positive integers starting from ${start} count ${count}:`, consecutiveIntegers);
  