var expect = require("chai").expect;
var car = require("./cons").car;
var list = require("./list").list;
var equalList = require("./list").equalList;

describe("list", function() {
  var oneThroughFour = list(1, 2, 3, 4);
  it("equalList(oneThroughFour, list(1, 2, 3, 4)) === true", function() {
    var r = equalList(oneThroughFour, list(1, 2, 3, 4));
    expect(r).to.equal(true);
  });
  it("car(oneThroughFour) === 1", function() {
    var r = car(oneThroughFour);
    expect(r).to.equal(1);
  });
});
