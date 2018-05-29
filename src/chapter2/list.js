var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;

var list = function() {
  var a = arguments;
  if (a[0] === undefined) {
    return null;
  }
  return cons(a[0], list.apply(undefined, [].slice.call(a, 1)));
};
var isNull = function(sequence) {
  return sequence === null;
}
var equalList = function(a, b) {
  if (a === b) {
    return true;
  }
  return car(a) === car(b) ? equalList(cdr(a), cdr(b)) : false;
};

var listRef = function(items, n) {
  if (n === 0) {
    return car(items);
  }
  return listRef(cdr(items), n - 1);
};

var length = function(items) {
  if (isNull(items)) {
    return 0;
  }
  return 1 + length(cdr(items));
};

var append = function(list1, list2) {
  if (isNull(list1)) {
    return list2;
  }
  return cons(car(list1), append(cdr(list1), list2));
};
var debug = function(items) {
  if (isNull(items)) {
    return null;
  }
  return car(items) + " " + debug(cdr(items));
};

var scaleList = function(items, factor) {
  if (isNull(items)) {
    return null;
  }
  return cons(car(items) * factor, scaleList(cdr(items), factor));
}

var map = function(proc, items) {
  if (cdr(items) === false) {
    return proc(items);
  }
  return cons(proc(car(items)), map(proc, cdr(items)))
}

var countLeaves = function(x) {
  if (isNull(x)) {
    return 0;
  }
  return isNull(car(x)) ? 1 + countLeaves(cdr(x)) : countLeaves(car(x)) + countLeaves(cdr(x));
}
module.exports = {
  list: list,
  equalList: equalList,
  listRef: listRef,
  length: length,
  append: append,
  debug: debug,
  scaleList: scaleList,
  map: map,
  countLeaves: countLeaves
};
