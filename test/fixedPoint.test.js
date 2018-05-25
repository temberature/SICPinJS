var expect = require("chai").expect;
var cube = require("../src/base").cube;
var average = require("../src/base").average;
var square = require("../src/base").square;
var fixedPoint = require("../src/fixedPoint");


describe("fixedPoint", function() {
  it('fixedPoint(cos, 1.0) closeTo 0.74', function() {
    var r = fixedPoint(Math.cos, 1.0);
    console.log(r);
    expect(r).to.closeTo(0.74, 0.01);
  })
  it('fixedPoint can calc Math.sqrt(2)', function() {
    var sqrt = function(x) {
      var averageDamp = function(f) {
        return function(y) {
          return average(y, f(y));
        }
      }
      var f = function(y) {
        return x / y;
      }
      return fixedPoint(averageDamp(f), 1.0);
    }
    var r = sqrt(2);
    console.log(r);
    expect(r).to.closeTo(Math.sqrt(2), 0.01);
  })
  it('fixedPoint can calc cubeRoot(8)', function() {
    var cubeRoot = function(x) {
      var averageDamp = function(f) {
        return function(y) {
          return average(y, f(y));
        }
      }
      var f = function(y) {
        return x / (y * y);
      }
      return fixedPoint(averageDamp(f), 1.0);
    }
    var r = cubeRoot(8);
    console.log(r);
    expect(r).to.closeTo(2, 1);
  })
})
