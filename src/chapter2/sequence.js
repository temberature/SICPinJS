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
var length = require("./list").length;
var map = require("./list").map;
var multiply = require("../base").multiply;
var isPrime = require("../chapter1/isPrime");
var listRef = require("./list").listRef;

var sumOddSquares = function(tree) {
  return accumulate(add, 0, map(square, filter(isOdd, enumerateTree(tree))));
};

var evenFibs = function(n) {
  return accumulate(
    cons,
    null,
    filter(isEven, map(fib, enumerateInterval(0, n)))
  );
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
};

var productOfSquaresOfOddElements = function(sequence) {
  return accumulate(multiply, 1, map(square, filter(isOdd, sequence)));
};
var primeSumPairs = function(n) {
  return filter(
    function(element) {
      return isPrime(listRef(element, 0) + listRef(element, 1));
    },
    map(function(i) {
      return map(function(j) {
        return list(i, j);
      }, enumerateInterval(1, i));
    }, enumerateInterval(1, n))
  );
};
var swap = function(i, j, sequence) {
  return map(function(item) {
    if (item === listRef(sequence, i)) {
      return listRef(sequence, j);
    } else if (item === listRef(sequence, j)) {
      return listRef(sequence, i);
    } else {
      return item;
    }
  }, sequence);
};

var bubbleSort = function(sequence) {
  var bubbleIter = function(k, l, sequence) {
    if (k >= l - 1) {
      return sequence;
    }
    return listRef(sequence, k) > listRef(sequence, add(k, 1))
      ? bubbleIter(add(k, 1), swap(k, add(k, 1), sequence))
      : bubbleIter(add(k, 1), sequence);
  };

  var bubbIter = function(l, sequence) {
    if (l <= 0) {
      return sequence;
    }
    return bubbIter(l - 1, bubbleIter(1, l, sequence));
  };
  console.log(length(sequence));
  return bubbIter(length(sequence) - 1, sequence);
};
module.exports = {
  sumOddSquares: sumOddSquares,
  evenFibs: evenFibs,
  filter: filter,
  isOdd: isOdd,
  accumulate: accumulate,
  enumerateInterval: enumerateInterval,
  enumerateTree: enumerateTree,
  listFibSquares: listFibSquares,
  productOfSquaresOfOddElements: productOfSquaresOfOddElements,
  primeSumPairs: primeSumPairs,
  bubbleSort: bubbleSort,
  swap: swap
};
