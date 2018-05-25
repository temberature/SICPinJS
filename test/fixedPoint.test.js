var expect = require("chai").expect;
var cube = require("../src/cube");
var fixedPoint = require("../src/fixedPoint");


describe("fixedPoint", function() {
  it('fixedPoint(cos, 1.0) closeTo 0.74', function() {
    var r = fixedPoint(Math.cos, 1.0);
    console.log(r);
    expect(r).to.closeTo(0.74, 0.01);
  })
  it('fixedPoint(division, 2) closeTo Math.sqrt(2)', function() {
    var sqrt = function(x) {
      var target = function(y) {
        return (y + x / y) / 2;
      }
      return fixedPoint(target, 1.0);
    }
    var r = sqrt(2);
    console.log(r);
    expect(r).to.closeTo(Math.sqrt(2), 0.01);
  })
})
