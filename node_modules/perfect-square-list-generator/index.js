// index.js

function generatePerfectSquareList(length) {
    const perfectSquareList = [];
    for (let i = 1; perfectSquareList.length < length; i++) {
      const square = i * i;
      perfectSquareList.push(square);
    }
    return perfectSquareList;
  }
  
  const length = 10;
  const perfectSquareList = generatePerfectSquareList(length);
  console.log(`Perfect square list of length ${length}:`, perfectSquareList);
  