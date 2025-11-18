const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  if (nums.length === 0) return 0;
	return nums.reduce((total, num) => total + num);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total * num);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let fact = 1;
	while (num >= 2) {
    fact *= num;
    num--;
  }
  return fact;
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
