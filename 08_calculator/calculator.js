const add = function(value1,value2) {
	return value1 + value2;
};

const subtract = function(value1,value2) {
	return value1 - value2;
};

const sum = function(array = []) {
  const Sum = array.reduce(function(accumulator, currentValue) {
    return accumulator += currentValue;
  }, 0);
  return Sum;
};


const multiply = function(array = []) {
  if (array.length === 0 ) return 0;

  const Multiply = array.reduce(function(accumulator, currentValue) {
    return accumulator *= currentValue;
  }, 1);
  return Multiply;
};

const power = function(a,b) {
  
  const powerMath = Math.pow(a,b);
  return powerMath;
};

const factorial = function(value1) {
  let total = 1;
	if (value1 === 0) return total;
  else{
    for (let index = 1; index <= value1; index++) {
      total *= index;
    }
    return total;
  }
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
