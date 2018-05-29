var cube = function(a) {
  return a * a * a;
};
var square = function(a) {
  return a * a;
};
var average = function(a, b) {
  return (a + b) / 2;
};

var add = function() {
  var a = arguments;
  if (a[0] === undefined) {
    return 0;
  }
  return a[0] + add.apply(undefined, [].slice.call(a, 1));
};

var multiply = function() {
  var a = arguments;
  if (a[0] === undefined) {
    return 1;
  }
  return a[0] * multiply.apply(undefined, [].slice.call(a, 1));
};
module.exports = {
  cube: cube,
  square: square,
  average: average,
  add: add,
  multiply: multiply
}
