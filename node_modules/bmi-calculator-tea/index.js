// index.js

function calculateBMI(weight, height) {
    return weight / (height * height);
  }
  
  const weight = 70; // kg
  const height = 1.75; // meters
  const bmi = calculateBMI(weight, height);
  console.log(`BMI: ${bmi.toFixed(2)}`);
  