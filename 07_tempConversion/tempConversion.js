const convertToCelsius = function(value) {
  // (x − 32) × 5/9 °C
  value = (value - 32) * 5 / 9;
  value = value.toFixed(1);
  value = parseFloat(value);
  return value;
};

const convertToFahrenheit = function(value) {
  // (x × 9/5+ 32)°F
  value = (value * 1.8) + 32;
  value = value.toFixed(1);
  value = parseFloat(value);
  return value;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
