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

describe("countLeaves", function() {
  it("countLeaves(cons(list(1, 2), list(3, 4))) === 4", function() {
    var x = cons(list(1, 2), list(3, 4));
    console.log(debug(x));
    expect(countLeaves(x)).to.equal(4);
  });
});
describe('scaleTree', function() {
  it('scaleTree(list(1, list(2, list(3, 4), 5), list(6, 7)), 10) === list(10, list(20, list(30, 40), 50), list(60, 70))', function() {
    var a = scaleTree(list(1, list(2, list(3, 4), 5), list(6, 7)), 10),
    b = list(10, list(20, list(30, 40), 50), list(60, 70));
    console.log(debug(a), debug(b));
    var r = equalTree(a, b);
    expect(r).to.equal(true);
  })
})
describe('sumOddSquares', function() {
  it('sumOddSquares(list(1, list(2, list(3, 4), 5), list(6, 7)), 10) === 84', function() {
    var a = scaleTree(list(1, list(2, list(3, 4), 5), list(6, 7)), 10),
    b = list(10, list(20, list(30, 40), 50), list(60, 70));
    console.log(debug(a), debug(b));
    var r = sumOddSquares(list(1, list(2, list(3, 4), 5), list(6, 7)), 10);
    expect(r).to.equal(84);
  })
})
