var expect = require("chai").expect;
var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;
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
  it("cdr(oneThroughFour) === list(2, 3, 4)", function() {
    var r = equalList(cdr(oneThroughFour), list(2, 3, 4));
    expect(r).to.equal(true);
  });
  it("car(cdr(oneThroughFour)) === 2", function() {
    var r = car(cdr(oneThroughFour));
    expect(r).to.equal(2);
  });
  it("cons(10, oneThroughFour) === list(10, 1, 2, 3, 4)", function() {
    var r = equalList(cons(10, oneThroughFour), list(10, 1, 2, 3, 4));
    expect(r).to.equal(true);
  });
  it("cons(5, oneThroughFour) === list(5, 1, 2, 3, 4)", function() {
    var r = equalList(cons(5, oneThroughFour), list(5, 1, 2, 3, 4));
    expect(r).to.equal(true);
  });
});
