(function(root) {
  'use strict';

  function flowLeft(/* fns */) {
    var fns = [].slice.call(arguments);

    return function(/* args */) {
      var len = fns.length;
      var i = 0;
      var args = fns[i].apply(this, arguments);
      while(++i < len) {
        args = fns[i].call(this, args);
      }
      return args;
    };
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = flowLeft;
    }
    exports.flowLeft = flowLeft;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return flowLeft;
    });
  } else {
    root.flowLeft = flowLeft;
  }

})(this);
