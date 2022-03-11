const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a,b) {
  return a+b;
};

const multiply = function(a,b) {
  return a*b;
};

const power = function(a,b) {
  let result = 1;
	for (let i=1; i<=b; i++){
    result = result *a;
  }
  return result;
};

const factorial = function(a) {
  if (a == 0) return 1;
  else
	  for (let i=1; i<=a; i++){
      return i++;
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
