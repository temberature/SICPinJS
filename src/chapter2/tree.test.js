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
var countLeaves = require("./list").countLeaves;
var scaleTree = require("./tree").scaleTree;
var equalTree = require("./tree").equalTree;
var sumOddSquares = require("./tree").sumOddSquares;
var evenFibs = require("./tree").evenFibs;
var filter = require("./tree").filter;
var isOdd = require("./tree").isOdd;
var accumulate = require("./tree").accumulate;
var enumerateInterval = require("./tree").enumerateInterval;
var enumerateTree = require("./tree").enumerateTree;
var fib = require('../fib');
var add = require('../base').add;
var multiply = require('../base').multiply;

describe("countLeaves", function() {
  it("countLeaves(cons(list(1, 2), list(3, 4))) === 4", function() {
    var x = cons(list(1, 2), list(3, 4));
    // console.log(debug(x));
    expect(countLeaves(x)).to.equal(4);
  });
});
describe('scaleTree', function() {
  it('scaleTree(list(1, list(2, list(3, 4), 5), list(6, 7)), 10) === list(10, list(20, list(30, 40), 50), list(60, 70))', function() {
    var a = scaleTree(list(1, list(2, list(3, 4), 5), list(6, 7)), 10),
    b = list(10, list(20, list(30, 40), 50), list(60, 70));
    // console.log(debug(a), debug(b));
    var r = equalTree(a, b);
    expect(r).to.equal(true);
  })
})
describe('sumOddSquares', function() {
  it('sumOddSquares(list(1, list(2, list(3, 4), 5), list(6, 7)), 10) === 84', function() {
    var r = sumOddSquares(list(1, list(2, list(3, 4), 5), list(6, 7)), 10);
    expect(r).to.equal(84);
  })
  it('evenFibs(3) === list(fib(3), fib(0))', function() {
    var a = evenFibs(3),
    b = list(fib(0), fib(3));
    console.log(debug(a), debug(b));
    var r = equalList(a, b);
    expect(r).to.equal(true);
  })
  it('filter(isOdd, list(1, 2, 3, 4)) === list(1, 3, 5)', function() {
    var a = filter(isOdd, list(1, 2, 3, 4, 5)),
    b = list(1, 3, 5);
    console.log(debug(a), debug(b));
    var r = equalList(a, b);
    expect(r).to.equal(true);
  })
  it('add(1, 2, 3, 4, 5) === 15', function() {
    var r = add(1, 2, 3, 4, 5);
    expect(r).to.equal(15);
  })
  it('accumulate(add, 0, list(1, 2, 3, 4, 5)) === 15', function() {
    var r = accumulate(add, 0, list(1, 2, 3, 4, 5));
    expect(r).to.equal(15);
  })
  it('multiply(1, 2, 3, 4, 5) === 120', function() {
    var r = multiply(1, 2, 3, 4, 5);
    expect(r).to.equal(120);
  })
  it('accumulate(multiply, 1, list(1, 2, 3, 4, 5)) === 120', function() {
    var r = accumulate(multiply, 1, list(1, 2, 3, 4, 5));
    expect(r).to.equal(120);
  })
  it('accumulate(cons, null, list(1, 2, 3, 4, 5)) === list(1, 2, 3, 4, 5)', function() {
    var a = accumulate(cons, null, list(1, 2, 3, 4, 5)),
    b = list(1, 2, 3, 4, 5);
    console.log(debug(a), debug(b));
    var r = equalList(a, b);
    expect(r).to.equal(true);
  })
  it('enumerateInterval(2, 7) === list(2, 3, 4, 5, 6, 7)', function() {
    var a = enumerateInterval(2, 7),
    b = list(2, 3, 4, 5, 6, 7);
    console.log(debug(a), debug(b));
    var r = equalList(a, b);
    expect(r).to.equal(true);
  })
  it('enumerateTree(list(1, list(2, list(3, 4)), 5)) === list(1, 2, 3, 4, 5)', function() {
    var a = enumerateTree(list(1, list(2, list(3, 4)), 5)),
    b = list(1, 2, 3, 4, 5);
    expect(debug(a)).to.equal(debug(b));
  })
})
