var abs = function(num) {
  return num > 0 ? num : -num;
};
var average = function(x, y) {
  return (x + y) / 2;
};
var sqrt = function(x) {
  if (typeof x !== "number" || x < 0) {
    throw new Error("input should be number and greater than 0");
  }
  var goodEnough = function(oldGuess, newGuess) {
    return abs(newGuess - oldGuess) / oldGuess < 0.001;
  };
  var improve = function(guess) {
    return average(x / guess, guess);
  };
  var sqrtIter = function(oldGuess, newGuess, x) {
    // console.log(oldGuess);
    return goodEnough(oldGuess, newGuess)
      ? oldGuess
      : sqrtIter(newGuess, improve(newGuess), x);
  };
  var final = function(almost) {
    var integer = Math.round(almost);
    return integer * integer === x ? integer : almost;
  };

  return x > 0 ? final(sqrtIter(1, improve(1), x)) : 0;
};

module.exports = sqrt;
