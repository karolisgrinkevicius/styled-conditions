!(function(n, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('@emotion/core'))
    : 'function' == typeof define && define.amd
    ? define(['exports', '@emotion/core'], e)
    : e((n.styledConditions = {}), n.core);
})(this, function(n, e) {
  var o = function(n) {
      return function() {
        for (var o = [], t = arguments.length; t--; ) o[t] = arguments[t];
        return function() {
          for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
          return function(r) {
            return (
              o.every(function(e) {
                return Boolean(r[e]) === n;
              }) &&
              e.css.apply(
                void 0,
                (function(n, e) {
                  for (var o = 1; o < n.length; o++)
                    'function' == typeof n[o] && (n[o] = n[o](e));
                  return n;
                })(t, r)
              )
            );
          };
        };
      };
    },
    t = o(!0),
    r = o(!1);
  (n.is = t), (n.isNot = r);
});
