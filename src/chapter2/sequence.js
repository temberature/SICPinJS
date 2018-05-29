var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;
var square = require("../base").square;
var fib = require("../fib");
var add = require("../base").add;
var isOdd = require("../base").isOdd;
var isEven = require("../base").isEven;
var isNull = require("../base").isNull;
var append = require("./list").append;
var map = require("./list").map;

var sumOddSquares = function(tree) {
  return accumulate(add, 0, map(square, filter(isOdd, enumerateTree(tree))));
};

var evenFibs = function(n) {
  return accumulate(cons, null, filter(isEven, map(fib, enumerateInterval(0, n))));
};

var filter = function(predicate, sequence) {
  if (isNull(sequence)) {
    return null;
  }
  var element = car(sequence),
    reside = cdr(sequence);
  return predicate(element)
    ? cons(element, filter(predicate, reside))
    : filter(predicate, reside);
};

var accumulate = function(op, initial, sequence) {
  var element = car(sequence),
    reside = cdr(sequence);
  if (isNull(reside)) {
    return isNull(element) ? sequence : op(element, initial);
  }
  return op(accumulate(op, initial, element), accumulate(op, initial, reside));
};

var enumerateInterval = function(low, high) {
  if (low >= high) {
    return cons(high, null);
  }
  return cons(low, enumerateInterval(add(low, 1), high));
};

var enumerateTree = function(tree) {
  var left = car(tree),
    right = cdr(tree);
  if (isNull(right)) {
    return isNull(left) ? cons(tree, null) : enumerateTree(left);
  }
  return append(enumerateTree(left), enumerateTree(right));
};

var listFibSquares = function(n) {
  return map(square, map(fib, enumerateInterval(0, n)));
}

module.exports = {
  sumOddSquares: sumOddSquares,
  evenFibs: evenFibs,
  filter: filter,
  isOdd: isOdd,
  accumulate: accumulate,
  enumerateInterval: enumerateInterval,
  enumerateTree: enumerateTree,
  listFibSquares: listFibSquares
};
