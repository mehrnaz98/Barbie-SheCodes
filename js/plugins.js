/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = e.document,
    r = Object.getPrototypeOf,
    o = n.slice,
    s = n.concat,
    a = n.push,
    l = n.indexOf,
    u = {},
    c = u.toString,
    f = u.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var r,
      o,
      s = (n = n || i).createElement("script");
    if (((s.text = e), t))
      for (r in v)
        (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          s.setAttribute(r, o);
    n.head.appendChild(s).parentNode.removeChild(s);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? u[c.call(e)] || "object"
      : typeof e;
  }
  var b = "3.4.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function T(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !m(e) &&
      !g(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (w.fn = w.prototype =
    {
      jquery: b,
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || m(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  s !== i &&
                  (u && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((n = s[t]),
                      (o =
                        r && !Array.isArray(n)
                          ? []
                          : r || w.isPlainObject(n)
                          ? n
                          : {}),
                      (r = !1),
                      (s[t] = w.extend(u, o, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    w.extend({
      expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = r(e)) &&
            ("function" !=
              typeof (n = f.call(t, "constructor") && t.constructor) ||
              p.call(n) !== d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        y(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (T(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(C, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (T(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : l.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
          !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          o = 0,
          a = [];
        if (T(e))
          for (i = e.length; o < i; o++)
            null != (r = t(e[o], o, n)) && a.push(r);
        else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
        return s.apply([], a);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var k = (function (e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a,
      l,
      u,
      c,
      f,
      p,
      d,
      h,
      m,
      g,
      v,
      y,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      C = 0,
      T = 0,
      k = le(),
      S = le(),
      E = le(),
      A = le(),
      N = function (e, t) {
        return e === t && (f = !0), 0;
      },
      j = {}.hasOwnProperty,
      L = [],
      I = L.pop,
      D = L.push,
      H = L.push,
      O = L.slice,
      P = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      q =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      $ =
        "\\[" +
        M +
        "*(" +
        F +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        F +
        "))|)" +
        M +
        "*\\]",
      R =
        ":(" +
        F +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        $ +
        ")*)|.*)\\)|)",
      _ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      W = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      X = new RegExp(M + "|>"),
      Y = new RegExp(R),
      U = new RegExp("^" + F + "$"),
      V = {
        ID: new RegExp("^#(" + F + ")"),
        CLASS: new RegExp("^\\.(" + F + ")"),
        TAG: new RegExp("^(" + F + "|[*])"),
        ATTR: new RegExp("^" + $),
        PSEUDO: new RegExp("^" + R),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + q + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        p();
      },
      se = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((L = O.call(w.childNodes)), w.childNodes),
        L[w.childNodes.length].nodeType;
    } catch (t) {
      H = {
        apply: L.length
          ? function (e, t) {
              D.apply(e, O.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, i, r) {
      var o,
        a,
        u,
        c,
        f,
        h,
        v,
        y = t && t.ownerDocument,
        C = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))
      )
        return i;
      if (
        !r &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), m)
      ) {
        if (11 !== C && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === C) {
              if (!(u = t.getElementById(o))) return i;
              if (u.id === o) return i.push(u), i;
            } else if (y && (u = y.getElementById(o)) && x(t, u) && u.id === o)
              return i.push(u), i;
          } else {
            if (f[2]) return H.apply(i, t.getElementsByTagName(e)), i;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return H.apply(i, t.getElementsByClassName(o)), i;
          }
        if (
          n.qsa &&
          !A[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== C || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === C && X.test(e))) {
            for (
              (c = t.getAttribute("id"))
                ? (c = c.replace(ie, re))
                : t.setAttribute("id", (c = b)),
                a = (h = s(e)).length;
              a--;

            )
              h[a] = "#" + c + " " + xe(h[a]);
            (v = h.join(",")), (y = (ee.test(e) && ve(t.parentNode)) || t);
          }
          try {
            return H.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {
            A(e, !0);
          } finally {
            c === b && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(B, "$1"), t, i, r);
    }
    function le() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function ue(e) {
      return (e[b] = !0), e;
    }
    function ce(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function me(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ge(e) {
      return ue(function (t) {
        return (
          (t = +t),
          ue(function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--; )
              n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (o = ae.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !G.test(t || (n && n.nodeName) || "HTML");
      }),
    (p = ae.setDocument =
      function (e) {
        var t,
          r,
          s = e ? e.ownerDocument || e : w;
        return (
          s !== d &&
            9 === s.nodeType &&
            s.documentElement &&
            ((h = (d = s).documentElement),
            (m = !o(d)),
            w !== d &&
              (r = d.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener("unload", oe, !1)
                : r.attachEvent && r.attachEvent("onunload", oe)),
            (n.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = Z.test(d.getElementsByClassName)),
            (n.getById = ce(function (e) {
              return (
                (h.appendChild(e).id = b),
                !d.getElementsByName || !d.getElementsByName(b).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && m)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (g = []),
            (n.qsa = Z.test(d.querySelectorAll)) &&
              (ce(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    g.push("\\[" + M + "*(?:value|" + q + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length ||
                    g.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    g.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (n.matchesSelector = Z.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ce(function (e) {
                (n.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  v.push("!=", R);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = Z.test(h.compareDocumentPosition)),
            (x =
              t || Z.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (N = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e === d || (e.ownerDocument === w && x(w, e))
                        ? -1
                        : t === d || (t.ownerDocument === w && x(w, t))
                        ? 1
                        : c
                        ? P(c, e) - P(c, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!r || !o)
                    return e === d
                      ? -1
                      : t === d
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : c
                      ? P(c, e) - P(c, t)
                      : 0;
                  if (r === o) return pe(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? pe(s[i], a[i])
                    : s[i] === w
                    ? -1
                    : a[i] === w
                    ? 1
                    : 0;
                })),
          d
        );
      }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== d && p(e),
        n.matchesSelector &&
          m &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          A(t, !0);
        }
      return 0 < ae(t, d, null, [e]).length;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && j.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !m
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ie, re);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (
        ((f = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(N),
        f)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (c = null), e;
    }),
    (r = ae.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += r(t);
        return n;
      }),
    ((i = ae.selectors =
      {
        cacheLength: 50,
        createPseudo: ue,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || ae.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && ae.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    Y.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = k[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                k(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = ae.attr(i, e);
              return null == r
                ? "!=" === t
                : !t ||
                    ((r += ""),
                    "=" === t
                      ? r === n
                      : "!=" === t
                      ? r !== n
                      : "^=" === t
                      ? n && 0 === r.indexOf(n)
                      : "*=" === t
                      ? n && -1 < r.indexOf(n)
                      : "$=" === t
                      ? n && r.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + r.replace(_, " ") + " ").indexOf(n)
                      : "|=" === t &&
                        (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var u,
                    c,
                    f,
                    p,
                    d,
                    h,
                    m = o !== s ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    x = !1;
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (p = t; (p = p[m]); )
                          if (
                            a
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                      for (
                        x =
                          (d =
                            (u =
                              (c =
                                (f = (p = g)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === C &&
                            u[1]) && u[2],
                          p = d && g.childNodes[d];
                        (p = (++d && p && p[m]) || (x = d = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++x && p === t) {
                          c[e] = [C, d, x];
                          break;
                        }
                    } else if (
                      (y &&
                        (x = d =
                          (u =
                            (c =
                              (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] || [])[0] === C && u[1]),
                      !1 === x)
                    )
                      for (
                        ;
                        (p = (++d && p && p[m]) || (x = d = 0) || h.pop()) &&
                        ((a
                          ? p.nodeName.toLowerCase() !== v
                          : 1 !== p.nodeType) ||
                          !++x ||
                          (y &&
                            ((c =
                              (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] = [C, x]),
                          p !== t));

                      );
                    return (x -= r) === i || (x % i == 0 && 0 <= x / i);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                ae.error("unsupported pseudo: " + e);
            return r[b]
              ? r(t)
              : 1 < r.length
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ue(function (e, n) {
                      for (var i, o = r(e, t), s = o.length; s--; )
                        e[(i = P(e, o[s]))] = !(n[i] = o[s]);
                    })
                  : function (e) {
                      return r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: ue(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(B, "$1"));
            return i[b]
              ? ue(function (e, t, n, r) {
                  for (var o, s = i(e, null, r, []), a = e.length; a--; )
                    (o = s[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: ue(function (e) {
            return function (t) {
              return 0 < ae(e, t).length;
            };
          }),
          contains: ue(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return -1 < (t.textContent || r(t)).indexOf(e);
              }
            );
          }),
          lang: ue(function (e) {
            return (
              U.test(e || "") || ae.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = m
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === d.activeElement &&
              (!d.hasFocus || d.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return Q.test(e.nodeName);
          },
          input: function (e) {
            return K.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ge(function () {
            return [0];
          }),
          last: ge(function (e, t) {
            return [t - 1];
          }),
          eq: ge(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ge(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ge(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ge(function (e, t, n) {
            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: ge(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = de(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
    function ye() {}
    function xe(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function be(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && "parentNode" === o,
        a = T++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var u,
              c,
              f,
              p = [C, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((c =
                      (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((u = c[o]) && u[0] === C && u[1] === a)
                      return (p[2] = u[2]);
                    if (((c[o] = p)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return 1 < e.length
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function Ce(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
      return s;
    }
    function Te(e, t, n, i, r, o) {
      return (
        i && !i[b] && (i = Te(i)),
        r && !r[b] && (r = Te(r, o)),
        ue(function (o, s, a, l) {
          var u,
            c,
            f,
            p = [],
            d = [],
            h = s.length,
            m =
              o ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            g = !e || (!o && t) ? m : Ce(m, p, e, a, l),
            v = n ? (r || (o ? e : h || i) ? [] : s) : g;
          if ((n && n(g, v, a, l), i))
            for (u = Ce(v, d), i(u, [], a, l), c = u.length; c--; )
              (f = u[c]) && (v[d[c]] = !(g[d[c]] = f));
          if (o) {
            if (r || e) {
              if (r) {
                for (u = [], c = v.length; c--; )
                  (f = v[c]) && u.push((g[c] = f));
                r(null, (v = []), u, l);
              }
              for (c = v.length; c--; )
                (f = v[c]) &&
                  -1 < (u = r ? P(o, f) : p[c]) &&
                  (o[u] = !(s[u] = f));
            }
          } else (v = Ce(v === s ? v.splice(h, v.length) : v)), r ? r(null, s, v, l) : H.apply(s, v);
        })
      );
    }
    function ke(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[" "],
          l = s ? 1 : 0,
          c = be(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          f = be(
            function (e) {
              return -1 < P(t, e);
            },
            a,
            !0
          ),
          p = [
            function (e, n, i) {
              var r =
                (!s && (i || n !== u)) ||
                ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
              return (t = null), r;
            },
          ];
        l < o;
        l++
      )
        if ((n = i.relative[e[l].type])) p = [be(we(p), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++);
            return Te(
              1 < l && we(p),
              1 < l &&
                xe(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              l < r && ke(e.slice(l, r)),
              r < o && ke((e = e.slice(r))),
              r < o && xe(e)
            );
          }
          p.push(n);
        }
      return we(p);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (s = ae.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            s,
            a,
            l,
            u,
            c = S[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (a = e, l = [], u = i.preFilter; a; ) {
            for (s in ((n && !(r = W.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              !(r = V[s].exec(a)) ||
                (u[s] && !(r = u[s](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: s, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? ae.error(e) : S(e, l).slice(0);
        }),
      (a = ae.compile =
        function (e, t) {
          var n,
            r,
            o,
            a,
            l,
            c,
            f = [],
            h = [],
            g = E[e + " "];
          if (!g) {
            for (t || (t = s(e)), n = t.length; n--; )
              (g = ke(t[n]))[b] ? f.push(g) : h.push(g);
            (g = E(
              e,
              ((r = h),
              (a = 0 < (o = f).length),
              (l = 0 < r.length),
              (c = function (e, t, n, s, c) {
                var f,
                  h,
                  g,
                  v = 0,
                  y = "0",
                  x = e && [],
                  b = [],
                  w = u,
                  T = e || (l && i.find.TAG("*", c)),
                  k = (C += null == w ? 1 : Math.random() || 0.1),
                  S = T.length;
                for (
                  c && (u = t === d || t || c);
                  y !== S && null != (f = T[y]);
                  y++
                ) {
                  if (l && f) {
                    for (
                      h = 0, t || f.ownerDocument === d || (p(f), (n = !m));
                      (g = r[h++]);

                    )
                      if (g(f, t || d, n)) {
                        s.push(f);
                        break;
                      }
                    c && (C = k);
                  }
                  a && ((f = !g && f) && v--, e && x.push(f));
                }
                if (((v += y), a && y !== v)) {
                  for (h = 0; (g = o[h++]); ) g(x, b, t, n);
                  if (e) {
                    if (0 < v) for (; y--; ) x[y] || b[y] || (b[y] = I.call(s));
                    b = Ce(b);
                  }
                  H.apply(s, b),
                    c &&
                      !e &&
                      0 < b.length &&
                      1 < v + o.length &&
                      ae.uniqueSort(s);
                }
                return c && ((C = k), (u = w)), x;
              }),
              a ? ue(c) : c)
            )).selector = e;
          }
          return g;
        }),
      (l = ae.select =
        function (e, t, n, r) {
          var o,
            l,
            u,
            c,
            f,
            p = "function" == typeof e && e,
            d = !r && s((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              2 < (l = d[0] = d[0].slice(0)).length &&
              "ID" === (u = l[0]).type &&
              9 === t.nodeType &&
              m &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              o = V.needsContext.test(e) ? 0 : l.length;
              o-- && ((u = l[o]), !i.relative[(c = u.type)]);

            )
              if (
                (f = i.find[c]) &&
                (r = f(
                  u.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(o, 1), !(e = r.length && xe(l))))
                  return H.apply(n, r), n;
                break;
              }
          }
          return (
            (p || a(e, d))(
              r,
              t,
              !m,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(N).join("") === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(q, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      ae
    );
  })(e);
  (w.find = k),
    (w.expr = k.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = k.uniqueSort),
    (w.text = k.getText),
    (w.isXMLDoc = k.isXML),
    (w.contains = k.contains),
    (w.escapeSelector = k.escape);
  var S = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && w(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    E = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    A = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function L(e, t, n) {
    return m(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return -1 < l.call(t, e) !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
        return 1 < i ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(L(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(L(this, e || [], !0));
      },
      is: function (e) {
        return !!L(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var I,
    D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var r, o;
    if (!e) return this;
    if (((n = n || I), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : D.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)
          ),
          j.test(r[1]) && w.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (o = i.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (I = w(i));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof e && w(e);
      if (!A.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? l.call(w(e), this[0])
          : l.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return S(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return S(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return S(e, "nextSibling");
        },
        prevAll: function (e) {
          return S(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return S(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return S(e, "previousSibling", n);
        },
        siblings: function (e) {
          return E((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return E(e.firstChild);
        },
        contents: function (e) {
          return void 0 !== e.contentDocument
            ? e.contentDocument
            : (N(e, "template") && (e = e.content || e),
              w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var r = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = w.filter(i, r)),
            1 < this.length &&
              (O[e] || w.uniqueSort(r), H.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var q = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function F(e) {
    throw e;
  }
  function $(e, t, n, i) {
    var r;
    try {
      e && m((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && m((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          w.each(t.match(q) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : w.extend({}, e);
    var i,
      r,
      o,
      s,
      a = [],
      l = [],
      u = -1,
      c = function () {
        for (s = s || e.once, o = i = !0; l.length; u = -1)
          for (r = l.shift(); ++u < a.length; )
            !1 === a[u].apply(r[0], r[1]) &&
              e.stopOnFalse &&
              ((u = a.length), (r = !1));
        e.memory || (r = !1), (i = !1), s && (a = r ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (r && !i && ((u = a.length - 1), l.push(r)),
              (function t(n) {
                w.each(n, function (n, i) {
                  m(i)
                    ? (e.unique && f.has(i)) || a.push(i)
                    : i && i.length && "string" !== x(i) && t(i);
                });
              })(arguments),
              r && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, a, n)); )
                a.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (s = l = []), (a = r = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (s = l = []), r || i || (a = r = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var r = m(e[i[4]]) && e[i[4]];
                    o[i[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, r) {
              var o = 0;
              function s(t, n, i, r) {
                return function () {
                  var a = this,
                    l = arguments,
                    u = function () {
                      var e, u;
                      if (!(t < o)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (u =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(u)
                            ? r
                              ? u.call(e, s(o, n, M, r), s(o, n, F, r))
                              : (o++,
                                u.call(
                                  e,
                                  s(o, n, M, r),
                                  s(o, n, F, r),
                                  s(o, n, M, n.notifyWith)
                                ))
                            : (i !== M && ((a = void 0), (l = [e])),
                              (r || n.resolveWith)(a, l));
                      }
                    },
                    c = r
                      ? u
                      : function () {
                          try {
                            u();
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, c.stackTrace),
                              o <= t + 1 &&
                                (i !== F && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? c()
                    : (w.Deferred.getStackHook &&
                        (c.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, m(r) ? r : M, e.notifyWith)),
                    n[1][3].add(s(0, e, m(t) ? t : M)),
                    n[2][3].add(s(0, e, m(i) ? i : F));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, r) : r;
            },
          },
          o = {};
        return (
          w.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (r[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = s.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = o.call(arguments),
          s = w.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (r[e] = 1 < arguments.length ? o.call(arguments) : n),
                --t || s.resolveWith(i, r);
            };
          };
        if (
          t <= 1 &&
          ($(e, s.done(a(n)).resolve, s.reject, !t),
          "pending" === s.state() || m(r[n] && r[n].then))
        )
          return s.then();
        for (; n--; ) $(r[n], a(n), s.reject);
        return s.promise();
      },
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      R.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var _ = w.Deferred();
  function B() {
    i.removeEventListener("DOMContentLoaded", B),
      e.removeEventListener("load", B),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      _.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          _.resolveWith(i, [w]);
      },
    }),
    (w.ready.then = _.then),
    "complete" === i.readyState ||
    ("loading" !== i.readyState && !i.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (i.addEventListener("DOMContentLoaded", B),
        e.addEventListener("load", B));
  var W = function (e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        u = null == n;
      if ("object" === x(n))
        for (a in ((r = !0), n)) W(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        m(i) || (s = !0),
        u &&
          (s
            ? (t.call(e, i), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(w(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    X = /-([a-z])/g;
  function Y(e, t) {
    return t.toUpperCase();
  }
  function U(e) {
    return e.replace(z, "ms-").replace(X, Y);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = w.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[U(t)] = n;
        else for (i in t) r[U(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][U(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(U)
              : (t = U(t)) in i
              ? [t]
              : t.match(q) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || w.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var K = new G(),
    Q = new G(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function ee(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (r = n) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : Z.test(r)
                ? JSON.parse(r)
                : r));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return Q.hasData(e) || K.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return K.access(e, t, n);
    },
    _removeData: function (e, t) {
      K.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = Q.get(o)), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = U(i.slice(5))), ee(o, i, r[i]));
            K.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              Q.set(this, e);
            })
          : W(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = Q.get(o, e)) ||
                    void 0 !== (n = ee(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Q.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = K.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = K.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = w._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          K.get(e, n) ||
          K.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              K.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = w.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = K.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    ie = ["Top", "Right", "Bottom", "Left"],
    re = i.documentElement,
    oe = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    se = { composed: !0 };
  re.getRootNode &&
    (oe = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && oe(e) && "none" === w.css(e, "display"))
      );
    },
    le = function (e, t, n, i) {
      var r,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
      return r;
    };
  function ue(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      l = a(),
      u = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (w.cssNumber[t] || ("px" !== u && +l)) &&
        ne.exec(w.css(e, t));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--; )
        w.style(e, t, c + u),
          (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
          (c /= o);
      (c *= 2), w.style(e, t, c + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, i, r, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)
      (i = e[c]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((u[c] = K.get(i, "display") || null),
              u[c] || (i.style.display = "")),
            "" === i.style.display &&
              ae(i) &&
              (u[c] =
                ((l = s = o = void 0),
                (s = (r = i).ownerDocument),
                (a = r.nodeName),
                (l = ce[a]) ||
                  ((o = s.body.appendChild(s.createElement(a))),
                  (l = w.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === l && (l = "block"),
                  (ce[a] = l)))))
          : "none" !== n && ((u[c] = "none"), K.set(i, "display", n)));
    for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    me = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ge(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
  }
  (me.optgroup = me.option),
    (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
    (me.th = me.td);
  var ye,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, i, r) {
    for (
      var o,
        s,
        a,
        l,
        u,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          for (
            s = s || f.appendChild(t.createElement("div")),
              a = (de.exec(o) || ["", ""])[1].toLowerCase(),
              l = me[a] || me._default,
              s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2],
              c = l[0];
            c--;

          )
            s = s.lastChild;
          w.merge(p, s.childNodes), ((s = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; (o = p[d++]); )
      if (i && -1 < w.inArray(o, i)) r && r.push(o);
      else if (
        ((u = oe(o)), (s = ge(f.appendChild(o), "script")), u && ve(s), n)
      )
        for (c = 0; (o = s[c++]); ) he.test(o.type || "") && n.push(o);
    return f;
  }
  (ye = i.createDocumentFragment().appendChild(i.createElement("div"))),
    (xe = i.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    ye.appendChild(xe),
    (h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ye.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
  var Ce = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ke = /^([^.]*)(?:\.(.+)|)/;
  function Se() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Ae(e, t) {
    return (
      (e ===
        (function () {
          try {
            return i.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ne(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Ne(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = Ee;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return w().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, r, i, n);
      })
    );
  }
  function je(e, t, n) {
    n
      ? (K.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              r,
              s = K.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = o.call(arguments)),
                K.set(this, t, s),
                (i = n(this, t)),
                this[t](),
                s !== (r = K.get(this, t)) || i ? K.set(this, t, !1) : (r = {}),
                s !== r)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), r.value
                );
            } else
              s.length &&
                (K.set(this, t, {
                  value: w.event.trigger(
                    w.extend(s[0], w.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === K.get(e, t) && w.event.add(e, t, Se);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        p,
        d,
        h,
        m,
        g = K.get(e);
      if (g)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && w.find.matchesSelector(re, r),
            n.guid || (n.guid = w.guid++),
            (l = g.events) || (l = g.events = {}),
            (s = g.handle) ||
              (s = g.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type
                    ? w.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            u = (t = (t || "").match(q) || [""]).length;
          u--;

        )
          (d = m = (a = ke.exec(t[u]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (r ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && w.expr.match.needsContext.test(r),
                  namespace: h.join("."),
                },
                o
              )),
              (p = l[d]) ||
                (((p = l[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, h, s)) ||
                  (e.addEventListener && e.addEventListener(d, s))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        p,
        d,
        h,
        m,
        g = K.hasData(e) && K.get(e);
      if (g && (l = g.events)) {
        for (u = (t = (t || "").match(q) || [""]).length; u--; )
          if (
            ((d = m = (a = ke.exec(t[u]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = w.event.special[d] || {},
                p = l[(d = (i ? f.delegateType : f.bindType) || d)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (c = p[o]),
                (!r && m !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                w.removeEvent(e, d, g.handle),
              delete l[d]);
          } else for (d in l) w.event.remove(e, d + t[u], n, i, !0);
        w.isEmptyObject(l) && K.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = w.event.fix(e),
        l = new Array(arguments.length),
        u = (K.get(this, "events") || {})[a.type] || [],
        c = w.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((a.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, a))
      ) {
        for (
          s = w.event.handlers.call(this, a, u), t = 0;
          (r = s[t++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace &&
              !1 !== o.namespace &&
              !a.rnamespace.test(o.namespace)) ||
              ((a.handleObj = o),
              (a.data = o.data),
              void 0 !==
                (i = (
                  (w.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + " ")] &&
                (s[r] = i.needsContext
                  ? -1 < w(r, this).index(u)
                  : w.find(r, this, null, [u]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: u, handlers: o });
          }
      return (
        (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: m(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && N(t, "input") && je(t, "click", Se),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && N(t, "input") && je(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              N(t, "input") &&
              K.get(t, "click")) ||
            N(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Se
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Se),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Se),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Se),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Ce.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return je(this, e, Ae), !1;
        },
        trigger: function () {
          return je(this, e), !0;
        },
        delegateType: t,
      };
    }),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Ne(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Ne(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Le =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ie = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (N(e, "table") &&
        N(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        w(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, i, r, o, s, a, l, u;
    if (1 === t.nodeType) {
      if (
        K.hasData(e) &&
        ((o = K.access(e)), (s = K.set(t, o)), (u = o.events))
      )
        for (r in (delete s.handle, (s.events = {}), u))
          for (n = 0, i = u[r].length; n < i; n++) w.event.add(t, r, u[r][n]);
      Q.hasData(e) && ((a = Q.access(e)), (l = w.extend({}, a)), Q.set(t, l));
    }
  }
  function Fe(e, t, n, i) {
    t = s.apply([], t);
    var r,
      o,
      a,
      l,
      u,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      g = t[0],
      v = m(g);
    if (v || (1 < p && "string" == typeof g && !h.checkClone && De.test(g)))
      return e.each(function (r) {
        var o = e.eq(r);
        v && (t[0] = g.call(this, r, o.html())), Fe(o, t, n, i);
      });
    if (
      p &&
      ((o = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === r.childNodes.length && (r = o),
      o || i)
    ) {
      for (l = (a = w.map(ge(r, "script"), Pe)).length; f < p; f++)
        (u = r),
          f !== d &&
            ((u = w.clone(u, !0, !0)), l && w.merge(a, ge(u, "script"))),
          n.call(e[f], u, f);
      if (l)
        for (c = a[a.length - 1].ownerDocument, w.map(a, qe), f = 0; f < l; f++)
          (u = a[f]),
            he.test(u.type || "") &&
              !K.access(u, "globalEval") &&
              w.contains(c, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? w._evalUrl &&
                  !u.noModule &&
                  w._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce"),
                  })
                : y(u.textContent.replace(He, ""), u, c));
    }
    return e;
  }
  function $e(e, t, n) {
    for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || w.cleanData(ge(i)),
        i.parentNode &&
          (n && oe(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Le, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        u,
        c = e.cloneNode(!0),
        f = oe(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (s = ge(c), i = 0, r = (o = ge(e)).length; i < r; i++)
          (a = o[i]),
            "input" === (u = (l = s[i]).nodeName.toLowerCase()) &&
            pe.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== u && "textarea" !== u) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (o = o || ge(e), s = s || ge(c), i = 0, r = o.length; i < r; i++)
            Me(o[i], s[i]);
        else Me(e, c);
      return (
        0 < (s = ge(c, "script")).length && ve(s, !f && ge(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[K.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[K.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return $e(this, e, !0);
      },
      remove: function (e) {
        return $e(this, e);
      },
      text: function (e) {
        return W(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Fe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Fe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Fe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Fe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return W(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ie.test(e) &&
              !me[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Fe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ge(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++)
            (n = s === o ? this : this.clone(!0)),
              w(r[s])[t](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    _e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(ie.join("|"), "i");
  function We(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style;
    return (
      (n = n || _e(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (s = w.style(e, t)),
        !h.pixelBoxStyles() &&
          Re.test(s) &&
          Be.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        (r = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (a = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (s = 12 === n(c.offsetWidth / 3)),
          re.removeChild(u),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      o,
      s,
      a,
      l,
      u = i.createElement("div"),
      c = i.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), s;
        },
      }));
  })();
  var Xe = ["Webkit", "Moz", "ms"],
    Ye = i.createElement("div").style,
    Ue = {};
  function Ve(e) {
    return (
      w.cssProps[e] ||
      Ue[e] ||
      (e in Ye
        ? e
        : (Ue[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                n--;

              )
                if ((e = Xe[n] + t) in Ye) return e;
            })(e) || e))
    );
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Ke = /^--/,
    Qe = { position: "absolute", visibility: "hidden", display: "block" },
    Ze = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var i = ne.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function et(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += w.css(e, n + ie[s], !0, r)),
        i
          ? ("content" === n && (l -= w.css(e, "padding" + ie[s], !0, r)),
            "margin" !== n &&
              (l -= w.css(e, "border" + ie[s] + "Width", !0, r)))
          : ((l += w.css(e, "padding" + ie[s], !0, r)),
            "padding" !== n
              ? (l += w.css(e, "border" + ie[s] + "Width", !0, r))
              : (a += w.css(e, "border" + ie[s] + "Width", !0, r)));
    return (
      !i &&
        0 <= o &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function tt(e, t, n) {
    var i = _e(e),
      r =
        (!h.boxSizingReliable() || n) &&
        "border-box" === w.css(e, "boxSizing", !1, i),
      o = r,
      s = We(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Re.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!h.boxSizingReliable() && r) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === w.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === w.css(e, "boxSizing", !1, i)),
        (o = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) +
        et(e, t, n || (r ? "border" : "content"), o, i, s) +
        "px"
    );
  }
  function nt(e, t, n, i, r) {
    return new nt.prototype.init(e, t, n, i, r);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = U(t),
          l = Ke.test(t),
          u = e.style;
        if (
          (l || (t = Ve(a)), (s = w.cssHooks[t] || w.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
        "string" == (o = typeof n) &&
          (r = ne.exec(n)) &&
          r[1] &&
          ((n = ue(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              l ||
              (n += (r && r[3]) || (w.cssNumber[a] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (u[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = U(t);
      return (
        Ke.test(t) || (t = Ve(a)),
        (s = w.cssHooks[t] || w.cssHooks[a]) &&
          "get" in s &&
          (r = s.get(e, !0, n)),
        void 0 === r && (r = We(e, t, i)),
        "normal" === r && t in Ze && (r = Ze[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Ge.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, t, i)
              : le(e, Qe, function () {
                  return tt(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = _e(e),
            s = !h.scrollboxSize() && "absolute" === o.position,
            a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, o),
            l = i ? et(e, t, i, a, o) : 0;
          return (
            a &&
              s &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  et(e, t, "border", !1, o) -
                  0.5
              )),
            l &&
              (r = ne.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Je(0, n, l)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              le(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Je);
    }),
    w.fn.extend({
      css: function (e, t) {
        return W(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = _e(e), r = t.length; s < r; s++)
                o[t[s]] = w.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((w.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = nt.prototype.init),
    (w.fx.step = {});
  var it,
    rt,
    ot,
    st,
    at = /^(?:toggle|show|hide)$/,
    lt = /queueHooks$/;
  function ut() {
    rt &&
      (!1 === i.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(ut)
        : e.setTimeout(ut, w.fx.interval),
      w.fx.tick());
  }
  function ct() {
    return (
      e.setTimeout(function () {
        it = void 0;
      }),
      (it = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = ie[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function pt(e, t, n) {
    for (
      var i,
        r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        s = r.length;
      o < s;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function dt(e, t, n) {
    var i,
      r,
      o = 0,
      s = dt.prefilters.length,
      a = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = it || ct(),
            n = Math.max(0, u.startTime + u.duration - t),
            i = 1 - (n / u.duration || 0),
            o = 0,
            s = u.tweens.length;
          o < s;
          o++
        )
          u.tweens[o].run(i);
        return (
          a.notifyWith(e, [u, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
        );
      },
      u = a.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: it || ct(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) u.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
              : a.rejectWith(e, [u, t]),
            this
          );
        },
      }),
      c = u.props;
    for (
      (function (e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = U(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = w.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(c, u.opts.specialEasing);
      o < s;
      o++
    )
      if ((i = dt.prefilters[o].call(u, e, c, u.opts)))
        return (
          m(i.stop) &&
            (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      w.map(c, pt, u),
      m(u.opts.start) && u.opts.start.call(e, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      w.fx.timer(w.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (w.Animation = w.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          m = e.nodeType && ae(e),
          g = K.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = w._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          p.always(function () {
            p.always(function () {
              s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), at.test(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (m ? "hide" : "show"))
            ) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              m = !0;
            }
            d[i] = (g && g[i]) || w.style(e, i);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (u = g && g.display) && (u = K.get(e, "display")),
            "none" === (c = w.css(e, "display")) &&
              (u
                ? (c = u)
                : (fe([e], !0),
                  (u = e.style.display || u),
                  (c = w.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != u)) &&
              "none" === w.css(e, "float") &&
              (l ||
                (p.done(function () {
                  h.display = u;
                }),
                null == u && ((c = h.display), (u = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          d))
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = K.access(e, "fxshow", { display: u })),
              o && (g.hidden = !m),
              m && fe([e], !0),
              p.done(function () {
                for (i in (m || fe([e]), K.remove(e, "fxshow"), d))
                  w.style(e, i, d[i]);
              })),
              (l = pt(m ? g[i] : 0, i, p)),
              i in g ||
                ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        w.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in w.fx.speeds
              ? (i.duration = w.fx.speeds[i.duration])
              : (i.duration = w.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = w.isEmptyObject(e),
          o = w.speed(t, n, i),
          s = function () {
            var t = dt(this, w.extend({}, e), o);
            (r || K.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = w.timers,
              s = K.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else for (r in s) s[r] && s[r].stop && lt.test(r) && i(s[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = K.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = w.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ft(t, !0), e, i, r);
      };
    }),
    w.each(
      {
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (it = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (it = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), ut());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (ot = i.createElement("input")),
    (st = i.createElement("select").appendChild(i.createElement("option"))),
    (ot.type = "checkbox"),
    (h.checkOn = "" !== ot.value),
    (h.optSelected = st.selected),
    ((ot = i.createElement("input")).value = "t"),
    (ot.type = "radio"),
    (h.radioValue = "t" === ot.value);
  var ht,
    mt = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return W(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (r =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = w.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(q);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = mt[t] || w.find.attr;
      mt[t] = function (e, t, i) {
        var r,
          o,
          s = t.toLowerCase();
        return (
          i ||
            ((o = mt[s]),
            (mt[s] = r),
            (r = null != n(e, t, i) ? s : null),
            (mt[s] = o)),
          r
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    vt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(q) || []).join(" ");
  }
  function xt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(q)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return W(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (r = w.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (m(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, xt(this)));
          });
        if ((t = bt(e)).length)
          for (; (n = this[l++]); )
            if (((r = xt(n)), (i = 1 === n.nodeType && " " + yt(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (a = yt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (m(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, xt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = bt(e)).length)
          for (; (n = this[l++]); )
            if (((r = xt(n)), (i = 1 === n.nodeType && " " + yt(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                for (; -1 < i.indexOf(" " + o + " "); )
                  i = i.replace(" " + o + " ", " ");
              r !== (a = yt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : m(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, xt(this), t), t);
            })
          : this.each(function () {
              var t, r, o, s;
              if (i)
                for (r = 0, o = w(this), s = bt(e); (t = s[r++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = xt(this)) && K.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : K.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + yt(xt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = m(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, w(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = w.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(wt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : yt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = w.makeArray(t), s = r.length;
              s--;

            )
              ((i = r[s]).selected =
                -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < w.inArray(w(e).val(), t));
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var Ct = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, r, o) {
      var s,
        a,
        l,
        u,
        c,
        p,
        d,
        h,
        v = [r || i],
        y = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = h = l = r = r || i),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Ct.test(y + w.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (x = y.split(".")).shift()), x.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((t = t[w.expando]
            ? t
            : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[y] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(r, n)))
      ) {
        if (!o && !d.noBubble && !g(r)) {
          for (
            u = d.delegateType || y, Ct.test(u + y) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            v.push(a), (l = a);
          l === (r.ownerDocument || i) &&
            v.push(l.defaultView || l.parentWindow || e);
        }
        for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
          (h = a),
            (t.type = 1 < s ? u : d.bindType || y),
            (p = (K.get(a, "events") || {})[t.type] && K.get(a, "handle")) &&
              p.apply(a, n),
            (p = c && a[c]) &&
              p.apply &&
              V(a) &&
              ((t.result = p.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !V(r) ||
            (c &&
              m(r[y]) &&
              !g(r) &&
              ((l = r[c]) && (r[c] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, Tt),
              r[y](),
              t.isPropagationStopped() && h.removeEventListener(y, Tt),
              (w.event.triggered = void 0),
              l && (r[c] = l))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(i, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              r = K.access(i, t);
            r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              r = K.access(i, t) - 1;
            r
              ? K.access(i, t, r)
              : (i.removeEventListener(e, n, !0), K.remove(i, t));
          },
        };
      });
  var kt = e.location,
    St = Date.now(),
    Et = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      n
    );
  };
  var At = /\[\]$/,
    Nt = /\r?\n/g,
    jt = /^(?:submit|button|image|reset|file)$/i,
    Lt = /^(?:input|select|textarea|keygen)/i;
  function It(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      w.each(t, function (t, r) {
        n || At.test(e)
          ? i(e, r)
          : It(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== x(t)) i(e, t);
    else for (r in t) It(e + "[" + r + "]", t[r], n, i);
  }
  (w.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = m(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) It(n, e[n], t, r);
    return i.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              Lt.test(this.nodeName) &&
              !jt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Nt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Nt, "\r\n") };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    qt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    Ft = {},
    $t = {},
    Rt = "*/".concat("*"),
    _t = i.createElement("a");
  function Bt(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(q) || [];
      if (m(n))
        for (; (i = o[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Wt(e, t, n, i) {
    var r = {},
      o = e === $t;
    function s(a) {
      var l;
      return (
        (r[a] = !0),
        w.each(e[a] || [], function (e, a) {
          var u = a(t, n, i);
          return "string" != typeof u || o || r[u]
            ? o
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), s(u), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!r["*"] && s("*"));
  }
  function zt(e, t) {
    var n,
      i,
      r = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && w.extend(!0, e, i), e;
  }
  (_t.href = kt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: kt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            kt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(Ft),
      ajaxTransport: Bt($t),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var r,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          m = h.context || h,
          g = h.context && (m.nodeType || m.jquery) ? w(m) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          C = {},
          T = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!a)
                  for (a = {}; (t = Pt.exec(s)); )
                    a[t[1].toLowerCase() + " "] = (
                      a[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = a[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? s : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = C[e.toLowerCase()] = C[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) k.always(e[k.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return r && r.abort(t), S(0, t), this;
            },
          };
        if (
          (v.promise(k),
          (h.url = ((t || h.url || kt.href) + "").replace(
            Mt,
            kt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""]),
          null == h.crossDomain)
        ) {
          u = i.createElement("a");
          try {
            (u.href = h.url),
              (u.href = u.href),
              (h.crossDomain =
                _t.protocol + "//" + _t.host != u.protocol + "//" + u.host);
          } catch (t) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Wt(Ft, h, n, k),
          c)
        )
          return k;
        for (p in ((f = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !qt.test(h.type)),
        (o = h.url.replace(Ht, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Dt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (Et.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Ot, "$1")),
              (d = (Et.test(o) ? "&" : "?") + "_=" + St++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] &&
            k.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && k.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          k.setRequestHeader("Content-Type", h.contentType),
        k.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          k.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || c))
          return k.abort();
        if (
          ((T = "abort"),
          y.add(h.complete),
          k.done(h.success),
          k.fail(h.error),
          (r = Wt($t, h, n, k)))
        ) {
          if (((k.readyState = 1), f && g.trigger("ajaxSend", [k, h]), c))
            return k;
          h.async &&
            0 < h.timeout &&
            (l = e.setTimeout(function () {
              k.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), r.send(b, S);
          } catch (t) {
            if (c) throw t;
            S(-1, t);
          }
        } else S(-1, "No Transport");
        function S(t, n, i, a) {
          var u,
            p,
            d,
            b,
            C,
            T = n;
          c ||
            ((c = !0),
            l && e.clearTimeout(l),
            (r = void 0),
            (s = a || ""),
            (k.readyState = 0 < t ? 4 : 0),
            (u = (200 <= t && t < 300) || 304 === t),
            i &&
              (b = (function (e, t, n) {
                for (
                  var i, r, o, s, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(h, k, i)),
            (b = (function (e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(s = u[l + " " + o] || u["* " + o]))
                      for (r in u)
                        if (
                          (a = r.split(" "))[1] === o &&
                          (s = u[l + " " + a[0]] || u["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = u[r])
                            : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, b, k, u)),
            u
              ? (h.ifModified &&
                  ((C = k.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[o] = C),
                  (C = k.getResponseHeader("etag")) && (w.etag[o] = C)),
                204 === t || "HEAD" === h.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = b.state), (p = b.data), (u = !(d = b.error))))
              : ((d = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
            (k.status = t),
            (k.statusText = (n || T) + ""),
            u ? v.resolveWith(m, [p, T, k]) : v.rejectWith(m, [k, T, d]),
            k.statusCode(x),
            (x = void 0),
            f && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? p : d]),
            y.fireWith(m, [k, T]),
            f &&
              (g.trigger("ajaxComplete", [k, h]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return k;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, i, r) {
        return (
          m(n) && ((r = r || i), (i = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (w._evalUrl = function (e, t) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          w.globalEval(e, t);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return m(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = m(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Xt = { 0: 200, 1223: 204 },
    Yt = w.ajaxSettings.xhr();
  (h.cors = !!Yt && "withCredentials" in Yt),
    (h.ajax = Yt = !!Yt),
    w.ajaxTransport(function (t) {
      var n, i;
      if (h.cors || (Yt && !t.crossDomain))
        return {
          send: function (r, o) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
            r))
              a.setRequestHeader(s, r[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        Xt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (r) {
              if (n) throw r;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (r, o) {
            (t = w("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              i.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Ut,
    Vt = [],
    Gt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Vt.pop() || w.expando + "_" + St++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (Gt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Gt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Gt, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return s || w.error(r + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === o ? w(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Vt.push(r)),
              s && m(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((Ut = i.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((r = (t =
                  i.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = i.location.href),
                t.head.appendChild(r))
              : (t = i)),
          (s = !n && []),
          (o = j.exec(e))
            ? [t.createElement(o[1])]
            : ((o = we([e], t, s)),
              s && s.length && w(s).remove(),
              w.merge([], o.childNodes)));
      var r, o, s;
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        0 < s.length &&
          w
            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u = w.css(e, "position"),
          c = w(e),
          f = {};
        "static" === u && (e.style.position = "relative"),
          (a = c.offset()),
          (o = w.css(e, "top")),
          (l = w.css(e, "left")),
          ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto")
            ? ((s = (i = c.position()).top), (r = i.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          m(t) && (t = t.call(e, n, w.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + r),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (r.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - w.css(i, "marginTop", !0),
            left: t.left - r.left - w.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");

          )
            e = e.offsetParent;
          return e || re;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
          return W(
            this,
            function (e, i, r) {
              var o;
              if (
                (g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
              )
                return o ? o[t] : e[i];
              o
                ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                : (e[i] = r);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
        if (n)
          return (n = We(e, t)), Re.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          w.fn[i] = function (r, o) {
            var s = arguments.length && (n || "boolean" != typeof r),
              a = n || (!0 === r || !0 === o ? "margin" : "border");
            return W(
              this,
              function (t, n, r) {
                var o;
                return g(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === r
                  ? w.css(t, n, a)
                  : w.style(t, n, r, a);
              },
              t,
              s ? r : void 0,
              s
            );
          };
        }
      );
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, i, r;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (i = o.call(arguments, 2)),
          ((r = function () {
            return e.apply(t || this, i.concat(o.call(arguments)));
          }).guid = e.guid =
            e.guid || w.guid++),
          r
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = m),
    (w.isWindow = g),
    (w.camelCase = U),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Kt = e.jQuery,
    Qt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Qt), t && e.jQuery === w && (e.jQuery = Kt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
}),
  "function" != typeof Object.create &&
    (Object.create = function (e) {
      function t() {}
      return (t.prototype = e), new t();
    }),
  (function (e, t, n, i) {
    "use strict";
    var r = {
      init: function (n, i) {
        (this.options = e.extend({}, e.fn.singlePageNav.defaults, n)),
          (this.container = i),
          (this.$container = e(i)),
          (this.$links = this.$container.find("a")),
          "" !== this.options.filter &&
            (this.$links = this.$links.filter(this.options.filter)),
          (this.$window = e(t)),
          (this.$htmlbody = e("html, body")),
          this.$links.on(
            "click.singlePageNav",
            e.proxy(this.handleClick, this)
          ),
          (this.didScroll = !1),
          this.checkPosition(),
          this.setTimer();
      },
      handleClick: function (t) {
        var n = this,
          i = t.currentTarget,
          r = e(i.hash);
        t.preventDefault(),
          r.length &&
            (n.clearTimer(),
            "function" == typeof n.options.beforeStart &&
              n.options.beforeStart(),
            n.setActiveLink(i.hash),
            n.scrollTo(r, function () {
              n.options.updateHash &&
                history.pushState &&
                history.pushState(null, null, i.hash),
                n.setTimer(),
                "function" == typeof n.options.onComplete &&
                  n.options.onComplete();
            }));
      },
      scrollTo: function (e, t) {
        var n = this,
          i = n.getCoords(e).top,
          r = !1;
        n.$htmlbody.stop().animate(
          { scrollTop: i },
          {
            duration: n.options.speed,
            easing: n.options.easing,
            complete: function () {
              "function" != typeof t || r || t(), (r = !0);
            },
          }
        );
      },
      setTimer: function () {
        var e = this;
        e.$window.on("scroll.singlePageNav", function () {
          e.didScroll = !0;
        }),
          (e.timer = setInterval(function () {
            e.didScroll && ((e.didScroll = !1), e.checkPosition());
          }, 250));
      },
      clearTimer: function () {
        clearInterval(this.timer),
          this.$window.off("scroll.singlePageNav"),
          (this.didScroll = !1);
      },
      checkPosition: function () {
        var e = this.$window.scrollTop(),
          t = this.getCurrentSection(e);
        null !== t && this.setActiveLink(t);
      },
      getCoords: function (e) {
        return { top: Math.round(e.offset().top) - this.options.offset };
      },
      setActiveLink: function (e) {
        var t = this.$container.find("a[href$='" + e + "']");
        t.hasClass(this.options.currentClass) ||
          (this.$links.removeClass(this.options.currentClass),
          t.addClass(this.options.currentClass));
      },
      getCurrentSection: function (i) {
        var r, o, s;
        for (r = 0; r < this.$links.length; r++)
          (o = this.$links[r].hash),
            e(o).length &&
              i >= this.getCoords(e(o)).top - this.options.threshold &&
              (s = o);
        if (i == e(n).height() - e(t).height()) {
          var a = this.$links.length;
          a > 0 && (s = this.$links[a - 1].hash);
        }
        return s || (0 === this.$links.length ? null : this.$links[0].hash);
      },
    };
    (e.fn.singlePageNav = function (e) {
      return this.each(function () {
        Object.create(r).init(e, this);
      });
    }),
      (e.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: "current",
        easing: "swing",
        updateHash: !1,
        filter: "",
        onComplete: !1,
        beforeStart: !1,
      });
  })(jQuery, window, document),
  (function (e, t, n, i) {
    function r(t, n) {
      var o = this;
      "object" == typeof n &&
        (delete n.refresh, delete n.render, e.extend(this, n)),
        (this.$element = e(t)),
        !this.imageSrc &&
          this.$element.is("img") &&
          (this.imageSrc = this.$element.attr("src"));
      var s = (this.position + "").toLowerCase().match(/\S+/g) || [];
      if (
        (s.length < 1 && s.push("center"),
        1 == s.length && s.push(s[0]),
        ("top" != s[0] &&
          "bottom" != s[0] &&
          "left" != s[1] &&
          "right" != s[1]) ||
          (s = [s[1], s[0]]),
        this.positionX !== i && (s[0] = this.positionX.toLowerCase()),
        this.positionY !== i && (s[1] = this.positionY.toLowerCase()),
        (o.positionX = s[0]),
        (o.positionY = s[1]),
        "left" != this.positionX &&
          "right" != this.positionX &&
          (isNaN(parseInt(this.positionX))
            ? (this.positionX = "center")
            : (this.positionX = parseInt(this.positionX))),
        "top" != this.positionY &&
          "bottom" != this.positionY &&
          (isNaN(parseInt(this.positionY))
            ? (this.positionY = "center")
            : (this.positionY = parseInt(this.positionY))),
        (this.position =
          this.positionX +
          (isNaN(this.positionX) ? "" : "px") +
          " " +
          this.positionY +
          (isNaN(this.positionY) ? "" : "px")),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/))
      )
        return (
          this.imageSrc &&
            this.iosFix &&
            !this.$element.is("img") &&
            this.$element.css({
              backgroundImage: "url(" + this.imageSrc + ")",
              backgroundSize: "cover",
              backgroundPosition: this.position,
            }),
          this
        );
      if (navigator.userAgent.match(/(Android)/))
        return (
          this.imageSrc &&
            this.androidFix &&
            !this.$element.is("img") &&
            this.$element.css({
              backgroundImage: "url(" + this.imageSrc + ")",
              backgroundSize: "cover",
              backgroundPosition: this.position,
            }),
          this
        );
      this.$mirror = e("<div />").prependTo(this.mirrorContainer);
      var a = this.$element.find(">.parallax-slider"),
        l = !1;
      0 == a.length
        ? (this.$slider = e("<img />").prependTo(this.$mirror))
        : ((this.$slider = a.prependTo(this.$mirror)), (l = !0)),
        this.$mirror.addClass("parallax-mirror").css({
          visibility: "hidden",
          zIndex: this.zIndex,
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
        }),
        this.$slider.addClass("parallax-slider").one("load", function () {
          (o.naturalHeight && o.naturalWidth) ||
            ((o.naturalHeight = this.naturalHeight || this.height || 1),
            (o.naturalWidth = this.naturalWidth || this.width || 1)),
            (o.aspectRatio = o.naturalWidth / o.naturalHeight),
            r.isSetup || r.setup(),
            r.sliders.push(o),
            (r.isFresh = !1),
            r.requestRender();
        }),
        l || (this.$slider[0].src = this.imageSrc),
        ((this.naturalHeight && this.naturalWidth) ||
          this.$slider[0].complete ||
          a.length > 0) &&
          this.$slider.trigger("load");
    }
    !(function () {
      for (
        var e = 0, n = ["ms", "moz", "webkit", "o"], i = 0;
        i < n.length && !t.requestAnimationFrame;
        ++i
      )
        (t.requestAnimationFrame = t[n[i] + "RequestAnimationFrame"]),
          (t.cancelAnimationFrame =
            t[n[i] + "CancelAnimationFrame"] ||
            t[n[i] + "CancelRequestAnimationFrame"]);
      t.requestAnimationFrame ||
        (t.requestAnimationFrame = function (n) {
          var i = new Date().getTime(),
            r = Math.max(0, 16 - (i - e)),
            o = t.setTimeout(function () {
              n(i + r);
            }, r);
          return (e = i + r), o;
        }),
        t.cancelAnimationFrame ||
          (t.cancelAnimationFrame = function (e) {
            clearTimeout(e);
          });
    })(),
      e.extend(r.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        mirrorContainer: "body",
        refresh: function () {
          (this.boxWidth = this.$element.outerWidth()),
            (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
            (this.boxOffsetTop = this.$element.offset().top - this.bleed),
            (this.boxOffsetLeft = this.$element.offset().left),
            (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
          var e,
            t = r.winHeight,
            n = r.docHeight,
            i = Math.min(this.boxOffsetTop, n - t),
            o = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
            s = (this.boxHeight + (i - o) * (1 - this.speed)) | 0,
            a = ((this.boxOffsetTop - i) * (1 - this.speed)) | 0;
          s * this.aspectRatio >= this.boxWidth
            ? ((this.imageWidth = (s * this.aspectRatio) | 0),
              (this.imageHeight = s),
              (this.offsetBaseTop = a),
              (e = this.imageWidth - this.boxWidth),
              "left" == this.positionX
                ? (this.offsetLeft = 0)
                : "right" == this.positionX
                ? (this.offsetLeft = -e)
                : isNaN(this.positionX)
                ? (this.offsetLeft = (-e / 2) | 0)
                : (this.offsetLeft = Math.max(this.positionX, -e)))
            : ((this.imageWidth = this.boxWidth),
              (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
              (this.offsetLeft = 0),
              (e = this.imageHeight - s),
              "top" == this.positionY
                ? (this.offsetBaseTop = a)
                : "bottom" == this.positionY
                ? (this.offsetBaseTop = a - e)
                : isNaN(this.positionY)
                ? (this.offsetBaseTop = (a - e / 2) | 0)
                : (this.offsetBaseTop = a + Math.max(this.positionY, -e)));
        },
        render: function () {
          var e = r.scrollTop,
            t = r.scrollLeft,
            n = this.overScrollFix ? r.overScroll : 0,
            i = e + r.winHeight;
          this.boxOffsetBottom > e && this.boxOffsetTop <= i
            ? ((this.visibility = "visible"),
              (this.mirrorTop = this.boxOffsetTop - e),
              (this.mirrorLeft = this.boxOffsetLeft - t),
              (this.offsetTop =
                this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
            : (this.visibility = "hidden"),
            this.$mirror.css({
              transform:
                "translate3d(" +
                this.mirrorLeft +
                "px, " +
                (this.mirrorTop - n) +
                "px, 0px)",
              visibility: this.visibility,
              height: this.boxHeight,
              width: this.boxWidth,
            }),
            this.$slider.css({
              transform:
                "translate3d(" +
                this.offsetLeft +
                "px, " +
                this.offsetTop +
                "px, 0px)",
              position: "absolute",
              height: this.imageHeight,
              width: this.imageWidth,
              maxWidth: "none",
            });
        },
      }),
      e.extend(r, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function () {
          if (!this.isReady) {
            var i = this,
              o = e(n),
              s = e(t),
              a = function () {
                (r.winHeight = s.height()),
                  (r.winWidth = s.width()),
                  (r.docHeight = o.height()),
                  (r.docWidth = o.width());
              },
              l = function () {
                var e = s.scrollTop(),
                  t = r.docHeight - r.winHeight,
                  n = r.docWidth - r.winWidth;
                (r.scrollTop = Math.max(0, Math.min(t, e))),
                  (r.scrollLeft = Math.max(0, Math.min(n, s.scrollLeft()))),
                  (r.overScroll = Math.max(e - t, Math.min(e, 0)));
              };
            s
              .on("resize.px.parallax load.px.parallax", function () {
                a(), i.refresh(), (r.isFresh = !1), r.requestRender();
              })
              .on("scroll.px.parallax load.px.parallax", function () {
                l(), r.requestRender();
              }),
              a(),
              l(),
              (this.isReady = !0);
            var u = -1;
            !(function e() {
              if (u == t.pageYOffset) return t.requestAnimationFrame(e), !1;
              (u = t.pageYOffset), i.render(), t.requestAnimationFrame(e);
            })();
          }
        },
        configure: function (t) {
          "object" == typeof t &&
            (delete t.refresh, delete t.render, e.extend(this.prototype, t));
        },
        refresh: function () {
          e.each(this.sliders, function () {
            this.refresh();
          }),
            (this.isFresh = !0);
        },
        render: function () {
          this.isFresh || this.refresh(),
            e.each(this.sliders, function () {
              this.render();
            });
        },
        requestRender: function () {
          this.render(), (this.isBusy = !1);
        },
        destroy: function (n) {
          var i,
            o = e(n).data("px.parallax");
          for (o.$mirror.remove(), i = 0; i < this.sliders.length; i += 1)
            this.sliders[i] == o && this.sliders.splice(i, 1);
          e(n).data("px.parallax", !1),
            0 === this.sliders.length &&
              (e(t).off(
                "scroll.px.parallax resize.px.parallax load.px.parallax"
              ),
              (this.isReady = !1),
              (r.isSetup = !1));
        },
      });
    var o = e.fn.parallax;
    (e.fn.parallax = function (i) {
      return this.each(function () {
        var o = e(this),
          s = "object" == typeof i && i;
        this == t || this == n || o.is("body")
          ? r.configure(s)
          : o.data("px.parallax")
          ? "object" == typeof i && e.extend(o.data("px.parallax"), s)
          : ((s = e.extend({}, o.data(), s)),
            o.data("px.parallax", new r(this, s))),
          "string" == typeof i && ("destroy" == i ? r.destroy(this) : r[i]());
      });
    }),
      (e.fn.parallax.Constructor = r),
      (e.fn.parallax.noConflict = function () {
        return (e.fn.parallax = o), this;
      }),
      e(function () {
        e('[data-parallax="scroll"]').parallax();
      });
  })(jQuery, window, document),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a = "Close",
      l = "BeforeClose",
      u = "MarkupParse",
      c = "Open",
      f = "Change",
      p = "mfp",
      d = "." + p,
      h = "mfp-ready",
      m = "mfp-removing",
      g = "mfp-prevent-close",
      v = function () {},
      y = !!window.jQuery,
      x = e(window),
      b = function (e, n) {
        t.ev.on(p + e + d, n);
      },
      w = function (t, n, i, r) {
        var o = document.createElement("div");
        return (
          (o.className = "mfp-" + t),
          i && (o.innerHTML = i),
          r ? n && n.appendChild(o) : ((o = e(o)), n && o.appendTo(n)),
          o
        );
      },
      C = function (n, i) {
        t.ev.triggerHandler(p + n, i),
          t.st.callbacks &&
            ((n = n.charAt(0).toLowerCase() + n.slice(1)),
            t.st.callbacks[n] &&
              t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
      },
      T = function (n) {
        return (
          (n === s && t.currTemplate.closeBtn) ||
            ((t.currTemplate.closeBtn = e(
              t.st.closeMarkup.replace("%title%", t.st.tClose)
            )),
            (s = n)),
          t.currTemplate.closeBtn
        );
      },
      k = function () {
        e.magnificPopup.instance ||
          ((t = new v()).init(), (e.magnificPopup.instance = t));
      };
    (v.prototype = {
      constructor: v,
      init: function () {
        var n = navigator.appVersion;
        (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
          (t.isAndroid = /android/gi.test(n)),
          (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
          (t.supportsTransition = (function () {
            var e = document.createElement("p").style,
              t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
            return !1;
          })()),
          (t.probablyMobile =
            t.isAndroid ||
            t.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (i = e(document)),
          (t.popupsCache = {});
      },
      open: function (n) {
        var r;
        if (!1 === n.isObj) {
          (t.items = n.items.toArray()), (t.index = 0);
          var s,
            a = n.items;
          for (r = 0; r < a.length; r++)
            if (((s = a[r]).parsed && (s = s.el[0]), s === n.el[0])) {
              t.index = r;
              break;
            }
        } else
          (t.items = e.isArray(n.items) ? n.items : [n.items]),
            (t.index = n.index || 0);
        if (!t.isOpen) {
          (t.types = []),
            (o = ""),
            n.mainEl && n.mainEl.length ? (t.ev = n.mainEl.eq(0)) : (t.ev = i),
            n.key
              ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
                (t.currTemplate = t.popupsCache[n.key]))
              : (t.currTemplate = {}),
            (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
            (t.fixedContentPos =
              "auto" === t.st.fixedContentPos
                ? !t.probablyMobile
                : t.st.fixedContentPos),
            t.st.modal &&
              ((t.st.closeOnContentClick = !1),
              (t.st.closeOnBgClick = !1),
              (t.st.showCloseBtn = !1),
              (t.st.enableEscapeKey = !1)),
            t.bgOverlay ||
              ((t.bgOverlay = w("bg").on("click" + d, function () {
                t.close();
              })),
              (t.wrap = w("wrap")
                .attr("tabindex", -1)
                .on("click" + d, function (e) {
                  t._checkIfClose(e.target) && t.close();
                })),
              (t.container = w("container", t.wrap))),
            (t.contentContainer = w("content")),
            t.st.preloader &&
              (t.preloader = w("preloader", t.container, t.st.tLoading));
          var l = e.magnificPopup.modules;
          for (r = 0; r < l.length; r++) {
            var f = l[r];
            (f = f.charAt(0).toUpperCase() + f.slice(1)), t["init" + f].call(t);
          }
          C("BeforeOpen"),
            t.st.showCloseBtn &&
              (t.st.closeBtnInside
                ? (b(u, function (e, t, n, i) {
                    n.close_replaceWith = T(i.type);
                  }),
                  (o += " mfp-close-btn-in"))
                : t.wrap.append(T())),
            t.st.alignTop && (o += " mfp-align-top"),
            t.fixedContentPos
              ? t.wrap.css({
                  overflow: t.st.overflowY,
                  overflowX: "hidden",
                  overflowY: t.st.overflowY,
                })
              : t.wrap.css({ top: x.scrollTop(), position: "absolute" }),
            (!1 === t.st.fixedBgPos ||
              ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
              t.bgOverlay.css({ height: i.height(), position: "absolute" }),
            t.st.enableEscapeKey &&
              i.on("keyup" + d, function (e) {
                27 === e.keyCode && t.close();
              }),
            x.on("resize" + d, function () {
              t.updateSize();
            }),
            t.st.closeOnContentClick || (o += " mfp-auto-cursor"),
            o && t.wrap.addClass(o);
          var p = (t.wH = x.height()),
            m = {};
          if (t.fixedContentPos && t._hasScrollBar(p)) {
            var g = t._getScrollbarSize();
            g && (m.marginRight = g);
          }
          t.fixedContentPos &&
            (t.isIE7
              ? e("body, html").css("overflow", "hidden")
              : (m.overflow = "hidden"));
          var v = t.st.mainClass;
          return (
            t.isIE7 && (v += " mfp-ie7"),
            v && t._addClassToMFP(v),
            t.updateItemHTML(),
            C("BuildControls"),
            e("html").css(m),
            t.bgOverlay
              .add(t.wrap)
              .prependTo(t.st.prependTo || e(document.body)),
            (t._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              t.content
                ? (t._addClassToMFP(h), t._setFocus())
                : t.bgOverlay.addClass(h),
                i.on("focusin" + d, t._onFocusIn);
            }, 16),
            (t.isOpen = !0),
            t.updateSize(p),
            C(c),
            n
          );
        }
        t.updateItemHTML();
      },
      close: function () {
        t.isOpen &&
          (C(l),
          (t.isOpen = !1),
          t.st.removalDelay && !t.isLowIE && t.supportsTransition
            ? (t._addClassToMFP(m),
              setTimeout(function () {
                t._close();
              }, t.st.removalDelay))
            : t._close());
      },
      _close: function () {
        C(a);
        var n = m + " " + h + " ";
        if (
          (t.bgOverlay.detach(),
          t.wrap.detach(),
          t.container.empty(),
          t.st.mainClass && (n += t.st.mainClass + " "),
          t._removeClassFromMFP(n),
          t.fixedContentPos)
        ) {
          var r = { marginRight: "" };
          t.isIE7 ? e("body, html").css("overflow", "") : (r.overflow = ""),
            e("html").css(r);
        }
        i.off("keyup.mfp focusin" + d),
          t.ev.off(d),
          t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          t.bgOverlay.attr("class", "mfp-bg"),
          t.container.attr("class", "mfp-container"),
          !t.st.showCloseBtn ||
            (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
            (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
          t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
          (t.currItem = null),
          (t.content = null),
          (t.currTemplate = null),
          (t.prevHeight = 0),
          C("AfterClose");
      },
      updateSize: function (e) {
        if (t.isIOS) {
          var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;
          t.wrap.css("height", i), (t.wH = i);
        } else t.wH = e || x.height();
        t.fixedContentPos || t.wrap.css("height", t.wH), C("Resize");
      },
      updateItemHTML: function () {
        var n = t.items[t.index];
        t.contentContainer.detach(),
          t.content && t.content.detach(),
          n.parsed || (n = t.parseEl(t.index));
        var i = n.type;
        if (
          (C("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
          (t.currItem = n),
          !t.currTemplate[i])
        ) {
          var o = !!t.st[i] && t.st[i].markup;
          C("FirstMarkupParse", o), (t.currTemplate[i] = !o || e(o));
        }
        r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
        var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
          n,
          t.currTemplate[i]
        );
        t.appendContent(s, i),
          (n.preloaded = !0),
          C(f, n),
          (r = n.type),
          t.container.prepend(t.contentContainer),
          C("AfterChange");
      },
      appendContent: function (e, n) {
        (t.content = e),
          e
            ? t.st.showCloseBtn &&
              t.st.closeBtnInside &&
              !0 === t.currTemplate[n]
              ? t.content.find(".mfp-close").length || t.content.append(T())
              : (t.content = e)
            : (t.content = ""),
          C("BeforeAppend"),
          t.container.addClass("mfp-" + n + "-holder"),
          t.contentContainer.append(t.content);
      },
      parseEl: function (n) {
        var i,
          r = t.items[n];
        if (
          (r.tagName
            ? (r = { el: e(r) })
            : ((i = r.type), (r = { data: r, src: r.src })),
          r.el)
        ) {
          for (var o = t.types, s = 0; s < o.length; s++)
            if (r.el.hasClass("mfp-" + o[s])) {
              i = o[s];
              break;
            }
          (r.src = r.el.attr("data-mfp-src")),
            r.src || (r.src = r.el.attr("href"));
        }
        return (
          (r.type = i || t.st.type || "inline"),
          (r.index = n),
          (r.parsed = !0),
          (t.items[n] = r),
          C("ElementParse", r),
          t.items[n]
        );
      },
      addGroup: function (e, n) {
        var i = function (i) {
          (i.mfpEl = this), t._openClick(i, e, n);
        };
        n || (n = {});
        var r = "click.magnificPopup";
        (n.mainEl = e),
          n.items
            ? ((n.isObj = !0), e.off(r).on(r, i))
            : ((n.isObj = !1),
              n.delegate
                ? e.off(r).on(r, n.delegate, i)
                : ((n.items = e), e.off(r).on(r, i)));
      },
      _openClick: function (n, i, r) {
        if (
          (void 0 !== r.midClick
            ? r.midClick
            : e.magnificPopup.defaults.midClick) ||
          !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)
        ) {
          var o =
            void 0 !== r.disableOn
              ? r.disableOn
              : e.magnificPopup.defaults.disableOn;
          if (o)
            if (e.isFunction(o)) {
              if (!o.call(t)) return !0;
            } else if (x.width() < o) return !0;
          n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
            (r.el = e(n.mfpEl)),
            r.delegate && (r.items = i.find(r.delegate)),
            t.open(r);
        }
      },
      updateStatus: function (e, i) {
        if (t.preloader) {
          n !== e && t.container.removeClass("mfp-s-" + n),
            i || "loading" !== e || (i = t.st.tLoading);
          var r = { status: e, text: i };
          C("UpdateStatus", r),
            (e = r.status),
            (i = r.text),
            t.preloader.html(i),
            t.preloader.find("a").on("click", function (e) {
              e.stopImmediatePropagation();
            }),
            t.container.addClass("mfp-s-" + e),
            (n = e);
        }
      },
      _checkIfClose: function (n) {
        if (!e(n).hasClass(g)) {
          var i = t.st.closeOnContentClick,
            r = t.st.closeOnBgClick;
          if (i && r) return !0;
          if (
            !t.content ||
            e(n).hasClass("mfp-close") ||
            (t.preloader && n === t.preloader[0])
          )
            return !0;
          if (n === t.content[0] || e.contains(t.content[0], n)) {
            if (i) return !0;
          } else if (r && e.contains(document, n)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (e) {
        t.bgOverlay.addClass(e), t.wrap.addClass(e);
      },
      _removeClassFromMFP: function (e) {
        this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
      },
      _hasScrollBar: function (e) {
        return (
          (t.isIE7 ? i.height() : document.body.scrollHeight) >
          (e || x.height())
        );
      },
      _setFocus: function () {
        (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
      },
      _onFocusIn: function (n) {
        return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target)
          ? void 0
          : (t._setFocus(), !1);
      },
      _parseMarkup: function (t, n, i) {
        var r;
        i.data && (n = e.extend(i.data, n)),
          C(u, [t, n, i]),
          e.each(n, function (n, i) {
            if (void 0 === i || !1 === i) return !0;
            if ((r = n.split("_")).length > 1) {
              var o = t.find(d + "-" + r[0]);
              if (o.length > 0) {
                var s = r[1];
                "replaceWith" === s
                  ? o[0] !== i[0] && o.replaceWith(i)
                  : "img" === s
                  ? o.is("img")
                    ? o.attr("src", i)
                    : o.replaceWith(
                        e("<img>").attr("src", i).attr("class", o.attr("class"))
                      )
                  : o.attr(r[1], i);
              }
            } else t.find(d + "-" + n).html(i);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === t.scrollbarSize) {
          var e = document.createElement("div");
          (e.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(e),
            (t.scrollbarSize = e.offsetWidth - e.clientWidth),
            document.body.removeChild(e);
        }
        return t.scrollbarSize;
      },
    }),
      (e.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (t, n) {
          return (
            k(),
            ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
            (t.index = n || 0),
            this.instance.open(t)
          );
        },
        close: function () {
          return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function (t, n) {
          n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (e.fn.magnificPopup = function (n) {
        k();
        var i = e(this);
        if ("string" == typeof n)
          if ("open" === n) {
            var r,
              o = y ? i.data("magnificPopup") : i[0].magnificPopup,
              s = parseInt(arguments[1], 10) || 0;
            o.items
              ? (r = o.items[s])
              : ((r = i),
                o.delegate && (r = r.find(o.delegate)),
                (r = r.eq(s))),
              t._openClick({ mfpEl: r }, i, o);
          } else
            t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
          (n = e.extend(!0, {}, n)),
            y ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
            t.addGroup(i, n);
        return i;
      });
    var S,
      E,
      A,
      N = "inline",
      j = function () {
        A && (E.after(A.addClass(S)).detach(), (A = null));
      };
    e.magnificPopup.registerModule(N, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          t.types.push(N),
            b(a + "." + N, function () {
              j();
            });
        },
        getInline: function (n, i) {
          if ((j(), n.src)) {
            var r = t.st.inline,
              o = e(n.src);
            if (o.length) {
              var s = o[0].parentNode;
              s &&
                s.tagName &&
                (E || ((S = r.hiddenClass), (E = w(S)), (S = "mfp-" + S)),
                (A = o.after(E).detach().removeClass(S))),
                t.updateStatus("ready");
            } else t.updateStatus("error", r.tNotFound), (o = e("<div>"));
            return (n.inlineElement = o), o;
          }
          return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
        },
      },
    });
    var L,
      I = "ajax",
      D = function () {
        L && e(document.body).removeClass(L);
      },
      H = function () {
        D(), t.req && t.req.abort();
      };
    e.magnificPopup.registerModule(I, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          t.types.push(I),
            (L = t.st.ajax.cursor),
            b(a + "." + I, H),
            b("BeforeChange." + I, H);
        },
        getAjax: function (n) {
          L && e(document.body).addClass(L), t.updateStatus("loading");
          var i = e.extend(
            {
              url: n.src,
              success: function (i, r, o) {
                var s = { data: i, xhr: o };
                C("ParseAjax", s),
                  t.appendContent(e(s.data), I),
                  (n.finished = !0),
                  D(),
                  t._setFocus(),
                  setTimeout(function () {
                    t.wrap.addClass(h);
                  }, 16),
                  t.updateStatus("ready"),
                  C("AjaxContentAdded");
              },
              error: function () {
                D(),
                  (n.finished = n.loadError = !0),
                  t.updateStatus(
                    "error",
                    t.st.ajax.tError.replace("%url%", n.src)
                  );
              },
            },
            t.st.ajax.settings
          );
          return (t.req = e.ajax(i)), "";
        },
      },
    });
    var O,
      P = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
          if (e.isFunction(i)) return i.call(t, n);
          if (n.el) return n.el.attr(i) || "";
        }
        return "";
      };
    e.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var n = t.st.image,
            i = ".image";
          t.types.push("image"),
            b(c + i, function () {
              "image" === t.currItem.type &&
                n.cursor &&
                e(document.body).addClass(n.cursor);
            }),
            b(a + i, function () {
              n.cursor && e(document.body).removeClass(n.cursor),
                x.off("resize" + d);
            }),
            b("Resize" + i, t.resizeImage),
            t.isLowIE && b("AfterChange", t.resizeImage);
        },
        resizeImage: function () {
          var e = t.currItem;
          if (e && e.img && t.st.image.verticalFit) {
            var n = 0;
            t.isLowIE &&
              (n =
                parseInt(e.img.css("padding-top"), 10) +
                parseInt(e.img.css("padding-bottom"), 10)),
              e.img.css("max-height", t.wH - n);
          }
        },
        _onImageHasSize: function (e) {
          e.img &&
            ((e.hasSize = !0),
            O && clearInterval(O),
            (e.isCheckingImgSize = !1),
            C("ImageHasSize", e),
            e.imgHidden &&
              (t.content && t.content.removeClass("mfp-loading"),
              (e.imgHidden = !1)));
        },
        findImageSize: function (e) {
          var n = 0,
            i = e.img[0],
            r = function (o) {
              O && clearInterval(O),
                (O = setInterval(function () {
                  return i.naturalWidth > 0
                    ? void t._onImageHasSize(e)
                    : (n > 200 && clearInterval(O),
                      void (3 === ++n
                        ? r(10)
                        : 40 === n
                        ? r(50)
                        : 100 === n && r(500)));
                }, o));
            };
          r(1);
        },
        getImage: function (n, i) {
          var r = 0,
            o = function () {
              n &&
                (n.img[0].complete
                  ? (n.img.off(".mfploader"),
                    n === t.currItem &&
                      (t._onImageHasSize(n), t.updateStatus("ready")),
                    (n.hasSize = !0),
                    (n.loaded = !0),
                    C("ImageLoadComplete"))
                  : 200 > ++r
                  ? setTimeout(o, 100)
                  : s());
            },
            s = function () {
              n &&
                (n.img.off(".mfploader"),
                n === t.currItem &&
                  (t._onImageHasSize(n),
                  t.updateStatus("error", a.tError.replace("%url%", n.src))),
                (n.hasSize = !0),
                (n.loaded = !0),
                (n.loadError = !0));
            },
            a = t.st.image,
            l = i.find(".mfp-img");
          if (l.length) {
            var u = document.createElement("img");
            (u.className = "mfp-img"),
              n.el &&
                n.el.find("img").length &&
                (u.alt = n.el.find("img").attr("alt")),
              (n.img = e(u).on("load.mfploader", o).on("error.mfploader", s)),
              (u.src = n.src),
              l.is("img") && (n.img = n.img.clone()),
              (u = n.img[0]).naturalWidth > 0
                ? (n.hasSize = !0)
                : u.width || (n.hasSize = !1);
          }
          return (
            t._parseMarkup(i, { title: P(n), img_replaceWith: n.img }, n),
            t.resizeImage(),
            n.hasSize
              ? (O && clearInterval(O),
                n.loadError
                  ? (i.addClass("mfp-loading"),
                    t.updateStatus("error", a.tError.replace("%url%", n.src)))
                  : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
                i)
              : (t.updateStatus("loading"),
                (n.loading = !0),
                n.hasSize ||
                  ((n.imgHidden = !0),
                  i.addClass("mfp-loading"),
                  t.findImageSize(n)),
                i)
          );
        },
      },
    });
    var q;
    e.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (e) {
          return e.is("img") ? e : e.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var e,
            n = t.st.zoom,
            i = ".zoom";
          if (n.enabled && t.supportsTransition) {
            var r,
              o,
              s = n.duration,
              u = function (e) {
                var t = e
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  i = "all " + n.duration / 1e3 + "s " + n.easing,
                  r = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  o = "transition";
                return (
                  (r["-webkit-" + o] =
                    r["-moz-" + o] =
                    r["-o-" + o] =
                    r[o] =
                      i),
                  t.css(r),
                  t
                );
              },
              c = function () {
                t.content.css("visibility", "visible");
              };
            b("BuildControls" + i, function () {
              if (t._allowZoom()) {
                if (
                  (clearTimeout(r),
                  t.content.css("visibility", "hidden"),
                  !(e = t._getItemToZoom()))
                )
                  return void c();
                (o = u(e)).css(t._getOffset()),
                  t.wrap.append(o),
                  (r = setTimeout(function () {
                    o.css(t._getOffset(!0)),
                      (r = setTimeout(function () {
                        c(),
                          setTimeout(function () {
                            o.remove(), (e = o = null), C("ZoomAnimationEnded");
                          }, 16);
                      }, s));
                  }, 16));
              }
            }),
              b(l + i, function () {
                if (t._allowZoom()) {
                  if ((clearTimeout(r), (t.st.removalDelay = s), !e)) {
                    if (!(e = t._getItemToZoom())) return;
                    o = u(e);
                  }
                  o.css(t._getOffset(!0)),
                    t.wrap.append(o),
                    t.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      o.css(t._getOffset());
                    }, 16);
                }
              }),
              b(a + i, function () {
                t._allowZoom() && (c(), o && o.remove(), (e = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === t.currItem.type;
        },
        _getItemToZoom: function () {
          return !!t.currItem.hasSize && t.currItem.img;
        },
        _getOffset: function (n) {
          var i,
            r = (i = n
              ? t.currItem.img
              : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            o = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);
          r.top -= e(window).scrollTop() - o;
          var a = {
            width: i.width(),
            height: (y ? i.innerHeight() : i[0].offsetHeight) - s - o,
          };
          return (
            void 0 === q &&
              (q = void 0 !== document.createElement("p").style.MozTransform),
            q
              ? (a["-moz-transform"] = a.transform =
                  "translate(" + r.left + "px," + r.top + "px)")
              : ((a.left = r.left), (a.top = r.top)),
            a
          );
        },
      },
    });
    var M = "iframe",
      F = function (e) {
        if (t.currTemplate[M]) {
          var n = t.currTemplate[M].find("iframe");
          n.length &&
            (e || (n[0].src = "//about:blank"),
            t.isIE8 && n.css("display", e ? "block" : "none"));
        }
      };
    e.magnificPopup.registerModule(M, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          t.types.push(M),
            b("BeforeChange", function (e, t, n) {
              t !== n && (t === M ? F() : n === M && F(!0));
            }),
            b(a + "." + M, function () {
              F();
            });
        },
        getIframe: function (n, i) {
          var r = n.src,
            o = t.st.iframe;
          e.each(o.patterns, function () {
            return r.indexOf(this.index) > -1
              ? (this.id &&
                  (r =
                    "string" == typeof this.id
                      ? r.substr(
                          r.lastIndexOf(this.id) + this.id.length,
                          r.length
                        )
                      : this.id.call(this, r)),
                (r = this.src.replace("%id%", r)),
                !1)
              : void 0;
          });
          var s = {};
          return (
            o.srcAction && (s[o.srcAction] = r),
            t._parseMarkup(i, s, n),
            t.updateStatus("ready"),
            i
          );
        },
      },
    });
    var $ = function (e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e;
      },
      R = function (e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
      };
    e.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var n = t.st.gallery,
            r = ".mfp-gallery";
          return (
            (t.direction = !0),
            !(!n || !n.enabled) &&
              ((o += " mfp-gallery"),
              b(c + r, function () {
                n.navigateByImgClick &&
                  t.wrap.on("click" + r, ".mfp-img", function () {
                    return t.items.length > 1 ? (t.next(), !1) : void 0;
                  }),
                  i.on("keydown" + r, function (e) {
                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                  });
              }),
              b("UpdateStatus" + r, function (e, n) {
                n.text &&
                  (n.text = R(n.text, t.currItem.index, t.items.length));
              }),
              b(u + r, function (e, i, r, o) {
                var s = t.items.length;
                r.counter = s > 1 ? R(n.tCounter, o.index, s) : "";
              }),
              b("BuildControls" + r, function () {
                if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                  var i = n.arrowMarkup,
                    r = (t.arrowLeft = e(
                      i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(g)),
                    o = (t.arrowRight = e(
                      i
                        .replace(/%title%/gi, n.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(g));
                  r.click(function () {
                    t.prev();
                  }),
                    o.click(function () {
                      t.next();
                    }),
                    t.container.append(r.add(o));
                }
              }),
              b(f + r, function () {
                t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  (t._preloadTimeout = setTimeout(function () {
                    t.preloadNearbyImages(), (t._preloadTimeout = null);
                  }, 16));
              }),
              void b(a + r, function () {
                i.off(r),
                  t.wrap.off("click" + r),
                  (t.arrowRight = t.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (t.direction = !0), (t.index = $(t.index + 1)), t.updateItemHTML();
        },
        prev: function () {
          (t.direction = !1), (t.index = $(t.index - 1)), t.updateItemHTML();
        },
        goTo: function (e) {
          (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            r = Math.min(n[1], t.items.length);
          for (e = 1; e <= (t.direction ? r : i); e++)
            t._preloadItem(t.index + e);
          for (e = 1; e <= (t.direction ? i : r); e++)
            t._preloadItem(t.index - e);
        },
        _preloadItem: function (n) {
          if (((n = $(n)), !t.items[n].preloaded)) {
            var i = t.items[n];
            i.parsed || (i = t.parseEl(n)),
              C("LazyLoad", i),
              "image" === i.type &&
                (i.img = e('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    i.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (i.hasSize = !0), (i.loadError = !0), C("LazyLoadError", i);
                  })
                  .attr("src", i.src)),
              (i.preloaded = !0);
          }
        },
      },
    });
    var _ = "retina";
    e.magnificPopup.registerModule(_, {
      options: {
        replaceSrc: function (e) {
          return e.src.replace(/\.\w+$/, function (e) {
            return "@2x" + e;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var e = t.st.retina,
              n = e.ratio;
            (n = isNaN(n) ? n() : n) > 1 &&
              (b("ImageHasSize." + _, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              b("ElementParse." + _, function (t, i) {
                i.src = e.replaceSrc(i, n);
              }));
          }
        },
      },
    }),
      k();
  });
