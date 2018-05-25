var fixedPoint = function(f, guess) {
  var newGuess = f(guess);
  if (Math.abs(newGuess - guess) < 0.001 ) {
    return guess;
  }
  return fixedPoint(f, newGuess);
};

module.exports = fixedPoint;
