var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;
var square = require('../base').square;
var fib = require('../fib');

var scaleTree = function(tree, factor) {
  if (isNull(tree)) {
    return null;
  }
  return cons(scaleTree(car(tree), factor), scaleTree(cdr(tree), factor));
};

var equalTree = function(a, b) {
  if (isNull(a) && a === b) {
    return true;
  }
  return equalTree(car(a), car(b)) && equalTree(cdr(a), cdr(b));
}

var sumOddSquares = function(tree) {
  if (isNull(tree)) {
    return null;
  }
  return isNull(car(tree)) && isOdd(tree) ? square(tree) + sumOddSquares(cdr(tree)) : sumOddSquares(car(tree)) + sumOddSquares(cdr(tree));
}

var evenFibs = function(n) {

  if (n < 0) {
    return null;
  }
  var fiber = fib(n);
  return fiber % 2 === 0 ? cons(fiber, evenFibs(n - 1)) : evenFibs(n - 1);
}

var filter = function(predicate, sequence) {
  if (isNull(sequence)) {
    return null;
  }
  var element = car(sequence), reside = cdr(sequence);
  return predicate(element) ? cons(element, filter(predicate, reside)) : filter(predicate, reside);
}
var isOdd = function(n) {
  return n % 2 === 1;
}
var isNull = function(sequence) {
  return sequence === null;
}

var accumulate = function(op, initial, sequence) {
  var element = car(sequence), reside = cdr(sequence);
  if (isNull(reside)) {
    return isNull(element) ? sequence : op(element, initial);
  }
  return op(accumulate(op, initial, element), accumulate(op, initial, reside))
}
module.exports = {
  scaleTree: scaleTree,
  equalTree: equalTree,
  sumOddSquares: sumOddSquares,
  evenFibs: evenFibs,
  filter: filter,
  isOdd: isOdd,
  accumulate: accumulate
};
