var expect = require("chai").expect;
var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;
var list = require("./list").list;
var equalList = require("./list").equalList;
var listRef = require("./list").listRef;
var length = require("./list").length;

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
describe("listRef", function() {
  var squares = list(1, 4, 9, 16, 25);
  it("listRef(squares, 3) === 16", function() {
    var r = listRef(squares, 3);
    expect(r).to.equal(16);
  });
});
describe("listLength", function() {
  var odds = list(1, 3, 5, 7);
  it("length(odds) === 4", function() {
    var r = length(odds);
    expect(r).to.equal(4);
  });
});
