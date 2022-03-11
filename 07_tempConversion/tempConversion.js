const ftoc = function(degree) {
  return degree = (degree-32)*5/9;
};

const ctof = function(degree) {
  return degree = (degree*9/5)+32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
