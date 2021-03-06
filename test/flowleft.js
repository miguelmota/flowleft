var test = require('tape');
var flowLeft = require('../flowleft');

test('flowleft', function (t) {
  'use strict';

  t.plan(3);

  function square(n) {
    return n * n;
  }

  function add(/* args */) {
    var result = 0, i = arguments.length;
    while(i--) result += arguments[i];
    return result;
  }

  var addSquare = flowLeft(add, square);

  t.equal(addSquare(1, 2), 9);
  t.equal(addSquare(1, 2, 3), 36);
  t.equal(addSquare(2), 4);
});
