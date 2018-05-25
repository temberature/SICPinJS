var cube = function(a) {
  return a * a * a;
};
var square = function(a) {
  return a * a;
};
var average = function(a, b) {
  return (a + b) / 2;
};

module.exports = {
  cube: cube,
  square: square,
  average: average
}
