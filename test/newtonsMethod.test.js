
var expect = require("chai").expect;
var cube = require("../src/base").cube;
var average = require("../src/base").average;
var square = require("../src/base").square;
var newtonsMethod = require("../src/newtonsMethod");

var deriv = function(g) {
  var dx = 0.00001;
  return function(x) {
    return (g(x + dx) - g(x)) / dx;
  }
}

describe("newtonsMethod", function() {
  it('deriv(cube)(5) closeTo 75', function() {
    var r = deriv(cube)(5);
    expect(r).to.closeTo(75, 1);
  })
})
