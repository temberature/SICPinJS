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
var listFibSquares = require('./sequence').listFibSquares;

describe("sequence", function() {
  it("listFibSquares(10) === list(0, 1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025)", function() {
    var a = listFibSquares(10),
    b = list(0, 1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025);
    expect(debug(a)).to.equal(debug(b));
  });
});
