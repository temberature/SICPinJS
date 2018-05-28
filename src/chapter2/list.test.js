var expect = require("chai").expect;
var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;
var list = require("./list").list;
var equalList = require("./list").equalList;
var listRef = require("./list").listRef;
var length = require("./list").length;
var append = require("./list").append;
var debug = require("./list").debug;
var scaleList = require("./list").scaleList;
var map = require("./list").map;

var squares = list(1, 4, 9, 16, 25);
var odds = list(1, 3, 5, 7);

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
  it("listRef(squares, 3) === 16", function() {
    var r = listRef(squares, 3);
    expect(r).to.equal(16);
  });
});
describe("listLength", function() {
  it("length(odds) === 4", function() {
    var r = length(odds);
    expect(r).to.equal(4);
  });
});
describe("listdebug", function() {
  it("append(squares, odds) === list(1, 4, 9, 16, 25, 1, 3, 5, 7)", function() {
    // console.log(debug(odds));
  });
});
describe("listappend", function() {
  it("append(squares, odds) === list(1, 4, 9, 16, 25, 1, 3, 5, 7)", function() {
    var a = append(squares, odds),
      b = list(1, 4, 9, 16, 25, 1, 3, 5, 7);
    // console.log(debug(a));
    var r = equalList(a, b);
    expect(r).to.equal(true);
  });
});
describe("scaleList", function() {
  it("scaleList(list(1, 2, 3, 4, 4), 10) === list(10, 20, 30, 40, 50)", function() {
    var a = scaleList(list(1, 2, 3, 4, 4), 10),
      b = list(10, 20, 30, 40, 50);
    // console.log(debug(a));
    var r = equalList(a, b);
    expect(r).to.equal(true);
  });
});
describe("mapList", function() {
  it("map(abs, list(-10, 2.5, -11.6, 17)) === list(10, 2.5, 11.6, 17)", function() {
    var a = map(Math.abs, list(-10, 2.5, -11.6, 17)),
      b = list(10, 2.5, 11.6, 17);
    console.log(debug(a));
    var r = equalList(a, b);
    expect(r).to.equal(true);
  });
});
