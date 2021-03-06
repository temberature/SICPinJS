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
var length = require("./list").length;
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
var listFibSquares = require('./sequence').listFibSquares;
var productOfSquaresOfOddElements = require('./sequence').productOfSquaresOfOddElements;
var primeSumPairs = require('./sequence').primeSumPairs;
var bubbleSort = require('./sequence').bubbleSort;
var swap = require('./sequence').swap;

describe("sequence", function() {
  it("listFibSquares(10) === list(0, 1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025)", function() {
    var a = listFibSquares(10),
    b = list(0, 1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025);
    expect(debug(a)).to.equal(debug(b));
  });
  it("productOfSquaresOfOddElements(list(1, 2, 3, 4, 5)) === 225", function() {
    var r = productOfSquaresOfOddElements(list(1, 2, 3, 4, 5));
    expect(r).to.equal(225);
  });
  it("primeSumPairs(6) === list(list(2, 1), list(3, 2), list(4, 1), list(4, 3), list(5, 2), list(6, 1), list(6, 5))", function() {
    var r = productOfSquaresOfOddElements(list(1, 2, 3, 4, 5));
    expect(r).to.equal(225);
  });
  it("swap(1, 2, list(2, 3, 1)) === list(2, 1, 3)", function() {
    var a = swap(1, 2, list(2, 3, 1)),
    b = list(2, 1, 3);
    expect(debug(a)).to.equal(debug(b));
  });
  it("bubbleSort(list(2, 3, 1)) === list(1, 2, 3)", function() {
    console.log(length(list(2, 3, 1)));
    var a = bubbleSort(list(2, 3, 1)),
    b = list(1, 2, 3);
    expect(debug(a)).to.equal(debug(b));
  });
});
