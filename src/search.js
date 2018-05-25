var average = require("./average");
var square = require("./square");

var search = function(f, negpoint, pospoint) {
  var closeEnough = function(a, b) {
    return Math.abs(a - b) < 0.001;
  }
  var midpoint = average(negpoint, pospoint);
  if (closeEnough(negpoint, pospoint)) {
    return midpoint;
  }

  if (f(midpoint) > 0) {
    return search(f, negpoint, midpoint);
  } else {
    return search(f, midpoint, pospoint)
  }
};

module.exports = search;
