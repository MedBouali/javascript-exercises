const convertToCelsius = function(temperature) {
  let convertedTemperature = (temperature - 32) * 5 / 9;
  return Math.round(convertedTemperature * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let convertedTemperature = (temperature * 9 / 5 + 32);
  return Math.round(convertedTemperature * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
