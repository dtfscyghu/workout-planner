// index.js

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  const celsiusTemperature = 20;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature} Celsius is equal to ${fahrenheitTemperature} Fahrenheit.`);
  