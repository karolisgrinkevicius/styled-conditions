import { css as n } from '@emotion/core';
var r = function(r) {
    return function() {
      for (var o = [], t = arguments.length; t--; ) o[t] = arguments[t];
      return function() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        return function(e) {
          return (
            o.every(function(n) {
              return Boolean(e[n]) === r;
            }) &&
            n.apply(
              void 0,
              (function(n, r) {
                for (var o = 1; o < n.length; o++)
                  'function' == typeof n[o] && (n[o] = n[o](r));
                return n;
              })(t, e)
            )
          );
        };
      };
    };
  },
  o = r(!0),
  t = r(!1);
export { o as is, t as isNot };