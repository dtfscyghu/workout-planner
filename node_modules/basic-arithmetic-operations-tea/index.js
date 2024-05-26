// index.js

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return 'Cannot divide by zero';
    }
    return a / b;
  }
  
  const a = 10;
  const b = 5;
  
  console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
  console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
  console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
  console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
  