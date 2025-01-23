const add = function(firstValue, secondValue) {
	return firstValue + secondValue;
};

const subtract = function(firstValue, secondValue) {
	return firstValue - secondValue;
};

const sum = function(array) {
	return array.reduce((total, value) => total + value, 0);
};

const multiply = function(array) {
  return array.reduce((total, value) => total * value, 1);
};

const power = function(value, exponent) {
	return value ** exponent;
};

const factorial = function(value) {
  let factorial = 1;
	for (let i = 1 ; i <= value ; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
