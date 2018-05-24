var abs = function(num) {
  return num > 0 ? num : -num;
};
var sqrt = function(x) {
  if (typeof x !== "number" || x < 0) {
    throw new Error("input should be number and greater than 0");
  }
  var goodEnough = function(guess) {
    return abs(guess * guess - x) < 0.001;
  };
  var improve = function(guess) {
    return (x / guess + guess) / 2;
  };
  var sqrtIter = function(guess, x) {
    return goodEnough(guess) ? guess : sqrtIter(improve(guess), x);
  };
  return x > 0 ? sqrtIter(1, x) : 0;
};

module.exports = sqrt;
