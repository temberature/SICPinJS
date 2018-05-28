var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;
var square = require('../base').square;

var scaleTree = function(tree, factor) {
  if (cdr(tree) === false) {
    return tree * factor;
  }
  return cons(scaleTree(car(tree), factor), scaleTree(cdr(tree), factor));
};

var equalTree = function(a, b) {
  if (cdr(a) === false && a === b) {
    return true;
  }
  return equalTree(car(a), car(b)) && equalTree(cdr(a), cdr(b));
}

var sumOddSquares = function(tree) {
  return square()
}
module.exports = {
  scaleTree: scaleTree,
  equalTree: equalTree
};
