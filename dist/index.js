var n = require('@emotion/core'),
  r = function(r) {
    return function() {
      for (var t = [], o = arguments.length; o--; ) t[o] = arguments[o];
      return function() {
        for (var o = [], e = arguments.length; e--; ) o[e] = arguments[e];
        return function(e) {
          return (
            t.every(function(n) {
              return Boolean(e[n]) === r;
            }) &&
            n.css.apply(
              void 0,
              (function(n, r) {
                for (var t = 1; t < n.length; t++)
                  'function' == typeof n[t] && (n[t] = n[t](r));
                return n;
              })(o, e)
            )
          );
        };
      };
    };
  },
  t = r(!0),
  o = r(!1);
(exports.is = t), (exports.isNot = o);
