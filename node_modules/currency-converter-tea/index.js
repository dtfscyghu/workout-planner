// index.js

const usdToVndExchangeRate = 23000;

function convertUsdToVnd(usdAmount) {
  return usdAmount * usdToVndExchangeRate;
}

const usdAmount = 100;
const vndAmount = convertUsdToVnd(usdAmount);
console.log(`${usdAmount} USD is equal to ${vndAmount} VND.`);
